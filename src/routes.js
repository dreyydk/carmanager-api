// This code contains the routes needed for each request

const express = require("express");
const brands_controller = require("./controllers/brands_controller");
const cars_controller = require("./controllers/cars_controller");
const routes = express.Router();

// Brand routes
routes.get("/brands", brands_controller.readAll);
routes.get("/brands/:id", brands_controller.readOne);
routes.post("/brands", brands_controller.create);
routes.put("/brands/:id", brands_controller.update);
routes.delete("/brands/:id", brands_controller.delete);

// Car routes
routes.get("/cars", cars_controller.readAll);
routes.get("/:brandId/cars", cars_controller.readByBrand);
routes.get("/cars/:carId", cars_controller.readById);
routes.post("/:brandId/cars", cars_controller.create);
routes.put("/cars/:carId", cars_controller.update);
routes.delete("/cars/:carId", cars_controller.delete);

module.exports = routes;
