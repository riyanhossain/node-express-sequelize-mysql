const express = require("express");
const verifyUser = require("../middlewares/verifyJwtToken")
const { register, getUsers, login } = require("../controllers/users.controller");
const router = express.Router();

//add single user
router.post("/register", register);

//get all the users
router.get("/getusers", verifyUser, getUsers);

//login
router.post("/login", login)

module.exports = router;
