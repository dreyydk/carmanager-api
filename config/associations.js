// This code contains the necessary settings for the associations to function

const Brand = require("../models/Brand");
const Car = require("../models/Car");

Brand.hasMany(Car, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Car.belongsTo(Brand, { foreignKey: "brandId", as: "brands" });

module.exports = { Brand, Car };
