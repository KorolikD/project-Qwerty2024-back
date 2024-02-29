const { ctrlWrapper } = require("../../helpers");
const getAllCategories = require("./getAllCategories");
const getProducts = require("./getProducts");

module.exports = {
  getAllCategories: ctrlWrapper(getAllCategories),
  getProducts: ctrlWrapper(getProducts),
};
