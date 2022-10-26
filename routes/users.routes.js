const express = require("express");
const { register, getUsers } = require("../controllers/users.controller");
const router = express.Router();

//add single user
router.post("/register", register);

//get all the users
router.get("/getusers", getUsers);

module.exports = router;
