import express from "express";
import { login, registion } from "../controller/user.controller.js";

const AuthRouter = express.Router();

AuthRouter.post("/registion", registion);
AuthRouter.post("/login", login); // Assuming login uses the same controller function for simplicity

export default AuthRouter;
