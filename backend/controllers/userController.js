import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// @route POST /api/users/login
// @access Public

const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // Set JWT as a HTTP-only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401); // unauthorized
    res.json("Invalid email or password");
  }
};

// @route GET /api/users/register
// @access Public

const registerUser = async (req, res) => {
  res.send("register user");
};

// @route POST /api/users/logout
// @access Private

const logoutUser = async (req, res) => {
  res.send("logout user");
};

// @route GET /api/users/profile
// @access Private

const getUserProfile = async (req, res) => {
  res.send("get user profile");
};

// @route POST /api/users/profile
// @access Private

const updateUserProfile = async (req, res) => {
  res.send("update user profile");
};

// @route GET /api/users
// @access Private/Admin

const getAllUsers = async (req, res) => {
  res.send("get all users");
};

// @route GET /api/users/:id
// @access Private/Admin

const getUserById = async (req, res) => {
  res.send("get User by ID");
};

// @route DELETE /api/users/:id
// @access Private/Admin

const deleteUser = async (req, res) => {
  res.send("delete User");
};

// @route POST /api/users/:id
// @access Private/Admin

const updateUser = async (req, res) => {
  res.send("update user by id");
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserById,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  updateUser,
};
