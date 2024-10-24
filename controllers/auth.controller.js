import { findUserByEmail, saveUserToDb } from "../services/auth.services.js";
import generateToken from "../utils/generateToken.js";

// Login controller to authenticate users

export const login = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await findUserByEmail(email);

    // If User already exists then create token and return it

    if (user) {
      const token = generateToken({ _id: user._id });

      res
        .status(200)
        .json({ message: "User authenticated successfully", token: token });

      return;
    }

    // If User does not exist then create new user and create token and return it

    const newUser = await saveUserToDb(email);
    const token = generateToken({ _id: newUser._id });

    if (newUser) {
      res
        .status(200)
        .json({ message: "User created successfully", token: token });
      return;
    }
    res.status(400).json({ message: "Failed to create user" });
    return;
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while processing your request" });
  }
};
