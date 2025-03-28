import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env
 const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Failed: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};
export default connectDB