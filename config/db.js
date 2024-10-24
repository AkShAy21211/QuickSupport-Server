import mongoose from "mongoose";
import congif from "./index.js";

const connectToDb = async () => {
  try {
    console.log(congif);

    await mongoose.connect(congif.mongouri);
    console.log("Connected to the database");
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
    process.exit(1);
  }
};

export default connectToDb;
