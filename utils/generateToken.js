import jwt from "jsonwebtoken";
import config from "../config/index.js";

const generateToken = (data) => {
  const token = jwt.sign(data, config.jwtSecret, {
    algorithm: "HS256",
    expiresIn: "1h",
  });

  return token;
};

export default generateToken;
