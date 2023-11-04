import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected', () =>{
            console.log("DB connected successfully");
        });

        connection.on('error', (err) => {
            console.log("DB connection error"+ err);
            
        });

    } catch (error) {
        console.log(error);
        console.log("Failed to connect with DB");   
    }
}