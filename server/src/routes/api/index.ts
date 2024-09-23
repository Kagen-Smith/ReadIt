import { Router } from "express";
import googleBook from "./google-book-routes.js";
import bookRoutes from "./book-routes.js";

const router = Router();

router.use("/google-books", googleBook);
router.use("/books", bookRoutes);

export default router;
