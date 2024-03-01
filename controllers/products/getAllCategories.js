const productsCategories = require("../../data/");
const data = require("../../data");

const getAllCategories = async (req, res) => {
  res.json(data);
};

module.exports = getAllCategories;
