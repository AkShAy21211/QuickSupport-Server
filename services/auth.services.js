import Usermodel from "../models/user.model.js";

export const saveUserToDb = async (email) => {
  try {
    const user = new Usermodel({ email: email });
    await user.save();

    return user;
  } catch (error) {
    console.error(`Error saving user to database: ${error.message}`);
  }
};


export const findUserByEmail = async (email) => {
  try {
    const user = await Usermodel.findOne({ email: email }).lean()

    return user;
  } catch (error) {
    console.error(`Error saving user to database: ${error.message}`);
  }
};
