import mongoose from "mongoose";


let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = {conn: null, promise: null}
}


async function connectDB(params) {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands : false
        }

        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, opts)
        .then((mongoose) => {
            return mongoose;
        })
        .catch((err) => {
            cached.promise = null; // reset so agli call retry kare
            throw err; // error ko upar bubble hone do, silently swallow mat karo
        });
    }

    cached.conn = await cached.promise;

    return cached.conn;
}

export default connectDB;