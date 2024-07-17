// This code contains the configs necessary for Sequelize to function

const Sequelize = require("sequelize");
const database = require("./config");
const sequelize = new Sequelize(database);

module.exports = sequelize;
