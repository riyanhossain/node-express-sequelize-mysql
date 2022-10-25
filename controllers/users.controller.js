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

module.exports = {
  addUser,
};
