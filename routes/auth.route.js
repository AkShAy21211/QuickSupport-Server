import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { login } from "../controllers/auth.controller.js";
const route = express.Router();

// GET route to get all users

route.post("/login", login);

export default route;
