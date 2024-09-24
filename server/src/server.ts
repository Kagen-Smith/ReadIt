import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json()); // Add this line

app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
