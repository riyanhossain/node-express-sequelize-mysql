const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const generateJwtToken = (user, expiresIn) => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: expiresIn },
        { algorithm: "HS256" }
    );
};

module.exports = { generateJwtToken };
