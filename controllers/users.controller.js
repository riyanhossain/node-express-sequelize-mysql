const db = require("../models/index");
const { v4: uuidv4 } = require("uuid");
const { hashIt, compareHash } = require("../utils/hash");
const { generateJwtToken } = require("../utils/generateJwtToken");
const User = db.users;

const register = async (req, res) => {
  try {
    //checking user exist
    const checkExist = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (checkExist) {
      return res.status(200).json({
        message: "user already exists",
      });
    }
    await User.create({
      ...req.body,
      password: await hashIt(req.body.password),
      _id: uuidv4(),
    });
    res.status(201).json({
      message: "User added",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return res.status(200).json({
        message: "User doesn't exist",
      });
    }
    const isPasswordMatched = await compareHash(
      req.body.password,
      user.password
    );
    if (!isPasswordMatched) {
      return res.status(200).json({
        message: "wrong password",
      });
    }
    res.status(200).json({
      message: "Login sucessfully",
      user: {
        name: user.name,
        _id: user._id,
        email: user.email,
      },
      accessToken: generateJwtToken(user, "6h"),
      refreshToken: generateJwtToken(user, "3d"),
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

//user list except admin
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        role: "user",
      },
      attributes: {
        exclude: ["password"],
      },
    });
    res.status(200).json({
      message: "Users fetched sucessfully",
      users,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  register,
  login,
  getUsers,
};
