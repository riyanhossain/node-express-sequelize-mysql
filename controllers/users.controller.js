const db = require("../models/index");
const User = db.users;

const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: "User added",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

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
  addUser,
  getUsers,
};
