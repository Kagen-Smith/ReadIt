import { Router } from "express"; // Import Router from express
import googleBook from "./google-book-routes.js"; // Import Google Books routes
import bookRoutes from "./book-routes.js"; // Import custom book routes

const router = Router(); // Create a new Router instance

// Use the Google Books routes under the /google-books path
router.use("/google-books", googleBook);

// Use the custom book routes under the /books path
router.use("/books", bookRoutes);

export default router; // Export the configured router