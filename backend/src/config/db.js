import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");  
    console.log("connection to mongodb successful!");
  } catch (error) {
    console.error("connection to mongodb failed!", error);
    process.exit(1); 
  }
};

