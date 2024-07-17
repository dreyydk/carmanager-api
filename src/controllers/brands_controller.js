// This code contains the controller needed for "brands" routes to function

const Brand = require("../../models/Brand");

module.exports = {
  // Create a new brand
  create: async (req, res) => {
    try {
      const { name, ceo, birth, country } = req.body;
      const brand = await Brand.create({ name, ceo, birth, country });
      return res.status(201).json(brand);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  // Read all registered brands
  readAll: async (req, res) => {
    try {
      const brands = await Brand.findAll();
      if (!brands) {
        return res.status(404).json({ error: "No brands found." });
      } else {
        return res.status(200).json(brands);
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  // Read a specific brand by id
  readOne: async (req, res) => {
    try {
      const id = req.params.id;
      const brand = await Brand.findByPk(id);
      if (!brand) {
        return res.status(404).json({ error: "Brand not found." });
      } else {
        return res.status(200).json(brand);
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  // Update a specific brand by id
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, owner, birth, country } = req.body;
      const brand = await Brand.findByPk(id);
      if (!brand) {
        return res.status(404).json({ error: "Brand not found." });
      } else {
        await brand.update({ name, owner, birth, country });
        return res.status(200).json(brand);
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  // Delete a specific brand by id
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const brand = await Brand.findByPk(id);
      if (!brand) {
        return res.status(404).json({ error: "Brand not found." });
      } else {
        await brand.destroy();
        return res.status(200).json({ message: "Brand deleted." });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
