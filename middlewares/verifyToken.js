import jwt from "jsonwebtoken"
import config from "../config/index.js";

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  console.log(token)
  if (!token) {
    return res.status(401).json({ message: "Token not found or expired" });
  }

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token not found or expired" });
    }

    req.user = decoded;
    next();
  });
};

export default verifyToken;
