import mongoose, { connection } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
        connection.on('connected',() => {
            console.log('MongoDB connected');
        })

        connection.on('error',(err) => {
            console.log('MongoDB error',err);
            process.exit(1);
            
        } )
        connection.on('disconnected',() => {
            console.log('MongoDB disconnected');
        })
    }
    catch (e) {
        console.log('Something goes wrong!');
        console.log(e);  
    }
}