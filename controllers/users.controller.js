const db = require("../models/index");
const { v4: uuidv4 } = require("uuid");
const { hashIt } = require("../utils/hash");
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

const login = async (req, res) => {};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
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
  getUsers,
};
