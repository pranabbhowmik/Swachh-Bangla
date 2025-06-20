import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.Mongodb_URI}`
    );
    console.log(
      `\n Mongodb connected || DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error in connecting to DB", error);
    process.exit(1);
  }
};

export default connectDb;
