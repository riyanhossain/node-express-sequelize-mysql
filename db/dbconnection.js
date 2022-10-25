const db = require("../models/index");

const dbconnection = () => {
  db.sequelize
    .sync({ force: false })
    .then(() => {
      console.log("conncted to db");
    })
    .catch((err) => {
      console.log("failed to connect");
    });
};

module.exports = {
  dbconnection,
};
