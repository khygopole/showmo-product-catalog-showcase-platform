import mongoose from "mongoose";

export const connectDatabase = async (MONGO_URI: string) => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "product_catalog_showcase",
    });
    console.log("Successfully Connected to Database");
  } catch (error) {
    console.error("Connection to Database failed: ", error);
    // process.exit(1);
  }
};
