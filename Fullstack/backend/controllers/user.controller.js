import bcrypt from "bcrypt";
import { userModel } from "../models/user.models.js";
import jwt from "jsonwebtoken";

const userSignup = async (req, res) => {
  const { name, email, password, phoneNumber, age } = req.body;

  const userExist = await userModel.findOne({ email });
  if (userExist) {
    return res.status(302).json({ message: "User already exists" });
  }

  try {
    let saltRounds = 5;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        console.error("Error during bcrypt:", err);
        res.status(500).json({ error: "Error during bcrypt" });
        return;
      } else {
        const user = new userModel({
          name,
          email,
          password: hash,
          phoneNumber,
          age,
        });

        await user.save();

        res.status(200).json({ 
          message: "User signup successfully!",
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            age: user.age
          }
        });
      }
    });
  } catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await userModel.findOne({ email });
  console.log(userExist);
  if (!userExist) {
    return res.status(404).json({ message: "User does not exist" });
  }

  try {
    bcrypt.compare(password, userExist.password, (err, result) => {
      const token = jwt.sign(
        {
          userId: userExist._id,
          email: userExist.email
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      if (err) {
        console.error("Error during bcrypt comparison:", err);
        res.status(500).json({ error: "Error during bcrypt comparison" });
        return;
      }
      if (result) {
        res.status(200).json({ 
          message: "Login successful",
          token: token,
          user: {
            id: userExist._id,
            name: userExist.name,
            email: userExist.email
          }
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    });
  } catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { userLogin, userSignup };
