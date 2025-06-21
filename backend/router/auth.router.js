import express from "express";
import { login, logout, registion } from "../controller/user.controller.js";

const AuthRouter = express.Router();

AuthRouter.post("/registion", registion);
AuthRouter.post("/login", login);
AuthRouter.post("/logout", logout);

export default AuthRouter;
