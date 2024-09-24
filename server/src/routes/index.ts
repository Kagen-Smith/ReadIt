import { Router } from "express"; // Import Router from express
import apiRoutes from "./api/index.js"; // Import API routes from the index file in the api folder
import authRoutes from "./auth-routes.js"; // Import authentication routes

const router = Router(); // Create a new Router instance

// Mount API routes under the /api path
router.use("/api", apiRoutes);

// Mount authentication routes under the /auth path
router.use("/auth", authRoutes);

export default router; // Export the configured router for use in other parts of the application