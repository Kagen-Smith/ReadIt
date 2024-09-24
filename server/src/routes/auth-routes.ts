// import { Router } from "express";
import express from "express";
import { login, getProfile } from "./auth-Jwt.js"; // Import the controller functions
import { verifyToken } from "../middleware/jwtMiddleware.js"; // Import JWT middleware

const router = express.Router();

router.post("/login", login);

router.get("/profile", verifyToken, getProfile);

export default router;
