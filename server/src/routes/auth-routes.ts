// Import express framework
import express from "express";
// Import controller functions for authentication
import { login, getProfile } from "./auth-Jwt.js";
// Import middleware for verifying JWT tokens
import { verifyToken } from "../middleware/jwtMiddleware.js";

const router = express.Router(); // Create a new Router instance

// Route for user login
router.post("/login", login); // Handle POST requests to /login with the login function

// Route for getting user profile, protected by JWT verification
router.get("/userPage", verifyToken, getProfile); // Handle GET requests to /profile with JWT verification

export default router; // Export the configured router
