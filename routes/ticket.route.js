import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { createTicket, getAllIssueCategory, seedIssueCategory } from "../controllers/ticket.controller.js";
const route = express.Router();

//CREATE NEW TICKET REQUEST
route.post("/create", verifyToken,createTicket);

// FETCH AND SEED ISSUE CATEGORY
route.post("/seed-issue",seedIssueCategory);
route.get("/issue",getAllIssueCategory);

export default route;
