const productsCategories = require("../../data/");

const getAllCategories = async (req, res) => {
  res.json(productsCategories);
};

module.exports = getAllCategories;
