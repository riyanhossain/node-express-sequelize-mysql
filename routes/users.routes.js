const express = require("express");
const { addUser, getUsers } = require("../controllers/users.controller");
const router = express.Router();

//add single user
router.post("/add", addUser);

//get all the users
router.get("/getusers", getUsers);

module.exports = router;
