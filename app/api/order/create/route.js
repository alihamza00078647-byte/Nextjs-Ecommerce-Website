import Product from "@/model/Product";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        
        const {userId} = getAuth(request);

        const {address, items} = await request.json();

        if (!address || items.length === 0) {
            return NextResponse.json({success: false, message: "Invalid data"});
        }

        //  calculate amount using items
        const amount = await items.reduce( async (accessedDynamicData, item) => {
            const product = await Product.findById(item.product);

            return accessedDynamicData + product.offerPrice * item.quantity;
        }, 0);  

        

    } catch (error) {
        
    }
}