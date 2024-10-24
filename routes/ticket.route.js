import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { createTicket } from "../controllers/ticket.controller.js";
const route = express.Router();

// GET route to get all users

route.post("/create", verifyToken,createTicket);

export default route;
