import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { createTicket, seedIssueCategory } from "../controllers/ticket.controller.js";
const route = express.Router();

// GET route to get all users

route.post("/create", verifyToken,createTicket);
route.post("/seed-issue",seedIssueCategory);

export default route;
