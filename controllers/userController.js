const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//public
//register user
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }
  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const createUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (createUser) {
    res.status(201).json({ _id: createUser.id, email: createUser.email });
  } else {
    res.status(400);
    throw new Error("user data is not valid ");
  }
  res.json({ message: "User Registered" });
});

//public
//login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await User.findOne({ email });
  //compare password

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,

          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

//private9o
//get current user
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
