import userController from "../controllers/user.controller";
import express from "express";

export const userRoutes = express.Router();

userRoutes.get("/register", userController.handleRegister);
userRoutes.get("/:id", userController.handleGetUserById);
userRoutes.get("/login", userController.handleLogin);
