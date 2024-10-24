import config from "../config/index";

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[0];

  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token is invalid" });
    }

    req.user = decoded;
    next();
  });
};

export default verifyToken;
