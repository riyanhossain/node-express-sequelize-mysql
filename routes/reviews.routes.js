const express = require("express");
const { addReview } = require("../controllers/reviews.controller");
const verifyJwtToken = require("../middlewares/verifyJwtToken");
const router = express.Router();

router.post("/add/:id", verifyJwtToken, addReview);

module.exports = router;
