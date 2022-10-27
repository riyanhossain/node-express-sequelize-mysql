const db = require("../models");
const { v4: uuidv4 } = require("uuid");

const Review = db.reviews;

const addReview = async (req, res) => {
    const userId = req.user.id;
    const productId = req.params.id;
    try {
        const review = await Review.create({
            ...req.body,
            id: uuidv4(),
            productId,
            userId,
        });
        res.status(201).json({
            message: "review added",
            review,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

module.exports = {
    addReview,
};
