import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

export const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
  } catch (error) {
    console.error(error.message);
  }
};
