import express from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/api/book-routes.js";
import authRoutes from "./routes/auth-routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use("/api", bookRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
