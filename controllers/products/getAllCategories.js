const productsCategories = require("../../data/productsCategories");

const getAllCategories = async (req, res) => {
  res.json({ productsCategories });
};

module.exports = getAllCategories;
