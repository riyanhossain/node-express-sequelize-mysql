const db = require("../models");
const { v4: uuidv4 } = require("uuid");

const Product = db.products;

const addProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      id: uuidv4(),
    });
    res.status(201).json({
      message: "product added",
      product,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  addProduct,
};
