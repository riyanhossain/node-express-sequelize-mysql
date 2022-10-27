const db = require("../models");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");
const { hashIt } = require("./hash");

dotenv.config();

const User = db.users;

const adminInit = async () => {
    try {
        const checkAdminExist = await User.findOne({
            where: {
                email: process.env.ADMIN_EMAIL,
            },
        });
        
        if (checkAdminExist) {
            return console.log("admin already exist");
        }

        await User.create({
            id: uuidv4(),
            name: "Riyan Hossain",
            email: process.env.ADMIN_EMAIL,
            password: await hashIt(process.env.ADMIN_PASSWORD),
            phone: "01785699512",
            role: "admin",
        });
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = adminInit;
