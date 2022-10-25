module.exports = {
  HOST: "localhost",
  PASSWORD: "",
  USER: "root",
  DB: "node-express-sequelize",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000,
  },
};
