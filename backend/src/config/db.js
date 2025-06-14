import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);  
    console.log("connection to mongodb successful!");
  } catch (error) {
    console.error("connection to mongodb failed!", error);
    process.exit(1); 
  }
};

