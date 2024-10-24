import express from "express";
import dotenv from "dotenv/config";
import connectToDb from "./config/db.js";

// Load environment variables from .env file

const app = express();
connectToDb();

app.use(express.json());

// Routes
app.use("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api", () => {});
app.use("/api", () => {});

app.use((req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

// API endpoints here

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
