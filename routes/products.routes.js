const express = require("express");
const { addProduct } = require("../controllers/products.controller");

const router = express.Router();

router.post("/addproduct", addProduct);

module.exports = router;
