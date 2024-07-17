// This code contains the controller needed for "cars" routes to function

const Car = require("../../models/Car");
const Brand = require("../../models/Brand");

module.exports = {
  // Create a new car
  create: async (req, res) => {
    try {
      const brandId = req.params.brandId;
      const { name, year, price, stock, power } = req.body;
      const brand = await Brand.findByPk(brandId);
      if (!brand) {
        return res.status(404).json({ error: "Brand not found." });
      } else {
        const car = await Car.create({
          name,
          year,
          price,
          stock,
          power,
          brandId,
        });
        return res.status(201).json(car);
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  // Read all cars
  readAll: async (req, res) => {
    try {
      const cars = await Car.findAll();
      if (!cars) {
        return res.status(404).json({ error: "No cars found." });
      } else {
        return res.status(200).json(cars);
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  // Read cars by brand id
  readByBrand: async (req, res) => {
    try {
      const brandId = await req.params.brandId;
      if (!brandId) {
        return res.status(404).json({ error: "Brand not found." });
      } else {
        const cars = await Car.findAll({ where: { brandId } });
        return res.status(200).json(cars);
      }
    } catch (error) {}
  },
  // Read a single car by id
  readById: async (req, res) => {
    try {
      const carId = await req.params.carId;
      const car = await Car.findByPk(carId);
      if (!car) {
        return res.status(404).json({ error: "Car not found." });
      } else {
        return res.status(200).json(car);
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  // Update a car by id
  update: async (req, res) => {
    try {
      const carId = await req.params.carId;
      const car = await Car.findByPk(carId);
      if (!car) {
        return res.status(404).json({ error: "Car not found." });
      } else {
        const { name, price, stock, power } = req.body;
        const updatedCar = await car.update({ name, price, stock, power });
        return res.status(200).json(updatedCar);
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  // Delete a car by id
  delete: async (req, res) => {
    try {
      const carId = await req.params.carId;
      const car = await Car.findByPk(carId);
      if (!car) {
        return res.status(404).json({ error: "Car not found." });
      } else {
        await car.destroy();
        return res.status(200).json({ message: "Car deleted." });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
