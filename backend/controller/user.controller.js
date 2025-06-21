import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a new user
export const registion = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    // Save the user to the database
    await newUser.save();
    // Generate a JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    // Respond with the user data and token
    res.status(201).json({
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error On Registion" });
  }
};

// Login a user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email " });
    }
    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // Respond with the user data and token
    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error On Login" });
  }
};

// logout a user
export const logout = async (req, res) => {
  try {
    // Invalidate the token by not sending it back to the client
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error On Logout" });
  }
};
