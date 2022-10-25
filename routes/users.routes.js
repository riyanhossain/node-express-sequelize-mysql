const express = require("express");
const { addUser } = require("../controllers/users.controller");
const router = express.Router();

router.post("/add", addUser);

module.exports = router;