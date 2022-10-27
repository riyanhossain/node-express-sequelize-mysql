const dbconfig = require("../config/db.config");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model")(sequelize, DataTypes);
db.products = require("./products.model")(sequelize, DataTypes);
db.reviews = require("./reviews.model")(sequelize, DataTypes);

db.users.hasMany(db.reviews, { as: "reviews" });
db.products.hasMany(db.reviews, { as: "reviews" });

db.reviews.belongsTo(db.users, {
    foreignKey: "userId",
    as: "users",
});
db.reviews.belongsTo(db.products, {
    foreignKey: "productId",
    as: "products",
});

module.exports = db;
