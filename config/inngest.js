// src/inngest/client.ts
import { Inngest } from "inngest";
import connectDB from "./db";
import User from "../model/userModel";
import Order from "@/model/Order";

export const inngest = new Inngest({ id: "quickcart-next" });

// Inngest function to save data in DB
export const syncUserCreation = inngest.createFunction(
    {
        id: "sync-user-from-clerk",
        triggers: { event: "clerk/user.created" }
    },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + " " + last_name,
            imageURL: image_url
        };
        await connectDB();
        await User.create(userData);
    }
);

// Inngest function to update data in DB
export const syncUserUpdation = inngest.createFunction(
    {
        id: "update-user-from-clerk",
        triggers: { event: "clerk/user.updated" }
    },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + " " + last_name,
            imageURL: image_url
        };
        await connectDB();
        await User.findByIdAndUpdate(id, userData); // 'finb' → 'findB' fixed
    }
);

// Inngest function to delete user from DB
export const syncUserDeletion = inngest.createFunction(
    {
        id: "delete-user-with-clerk",
        triggers: { event: "clerk/user.deleted" }
    },
    async ({ event }) => {
        const { id } = event.data;
        await connectDB();
        await User.findByIdAndDelete(id); // 'finb' → 'findB' fixed
    }
);


// inngest function to create db (batch processing tasks handle efficiently).

export const createUserOrder = inngest.createFunction(
    {
        id: "create-user-order",
        batchEvents: {
            maxSize: 5,
            timeout: "5s"
        },
        triggers: {event: "order/created"}
    },

    async ({events}) => {
        const orders = events.map((event) => {
            return  {
                userId: event.data.userId,
                items: event.data.items,
                amount: event.data.amount,
                address: event.data.address,
                date: event.data.date,
            }
        })

        await connectDB();
        await Order.insertMany(orders);

        return {success: true, processed: orders.length}
    }
)
