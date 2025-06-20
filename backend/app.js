import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRouter from "./router/auth.router.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Importing routes
app.use("/api/auth", AuthRouter);
export default app;
