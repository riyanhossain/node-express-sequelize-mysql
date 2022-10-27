const db = require("../models");

const Product = db.products

const addProduct = async(req,res) => {
    const product = await Product.create({
        ...req.body,
        _id:
    })
}

