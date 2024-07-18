import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://svglrd69:Ben100omniverse@cluster0.3jdtedo.mongodb.net/crud_db");
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);  }
};

export default connectMongoDB;
