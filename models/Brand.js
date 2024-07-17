// This code contains the model needed for table "brands" to function

const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Brand = sequelize.define("brands", {
  name: DataTypes.STRING,
  ceo: DataTypes.STRING,
  birth: DataTypes.DATE,
  country: DataTypes.STRING,
});

module.exports = Brand;
