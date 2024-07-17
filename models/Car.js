// This code contains the model needed for table "cars" to funcion

const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Car = sequelize.define("cars", {
  name: DataTypes.STRING,
  year: DataTypes.INTEGER,
  price: DataTypes.INTEGER,
  stock: DataTypes.INTEGER,
  power: DataTypes.INTEGER,
  brandId: DataTypes.INTEGER,
});

module.exports = Car;
