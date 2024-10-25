import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import connectToDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import ticketRoute from "./routes/ticket.route.js";
// Load environment variables from .env file

const app = express();
connectToDb();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000","https://quicksupport-client.onrender.com"],
  })
);

// Routes
app.use("/api/test", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api/auth", authRoute);
app.use("/api/ticket", ticketRoute);

app.use((req, res, next) => {
  res.status(500).send("Internal Server Error");
});

// API endpoints here

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
