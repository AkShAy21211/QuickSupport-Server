import jwt from "jsonwebtoken";
import config from "../config/index";

const generateToken = (data) => {
  // Ensure the token is returned
  const token = jwt.sign(data, config.jwtSecret, {
    algorithm: "HS256",
    expiresIn: "1h",
  });

  return token;
};

export default generateToken;
