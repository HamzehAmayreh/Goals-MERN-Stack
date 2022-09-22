const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @Desc Resgister User
// @Route POST /api/users
// @Access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new Error("Please add all fields");
  }

  existUser = await User.findOne({ email });
  if (existUser) {
    res.status(400);
    throw new Error("User already exist");
  }
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create the user
  createdUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (createdUser) {
    res.status(201).json({
      _id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      token: GenerateToken(createdUser._id), //edit this if it doesn't work with createduser._id
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});
// @Desc Authenticate a User
// @Route POST /api/login
// @Access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check for user email
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: GenerateToken(user._id), //edit this if it doesn't work with createduser._id
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});

// @Desc Resgister User
// @Route GET /api/me
// @Access Private

const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user._id);

  res.status(200).json({
    id: _id,
    name: name,
    email: email,
  });
});

//Generate JWT

const GenerateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { registerUser, loginUser, getMe };
