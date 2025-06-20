import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./db/db.js";

dotenv.config({ path: "./.env" });

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
