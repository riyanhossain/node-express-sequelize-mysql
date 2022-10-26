const db = require("../models/index");

const dbconnection = async () => {
  try {
    await db.sequelize.sync({ force: false });
    console.log("conncted to db");
  } catch (err) {
    console.log("connect failed");
  }
};

module.exports = {
  dbconnection,
};
