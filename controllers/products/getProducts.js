const Product = require("../../models/Product");

const getProducts = async (req, res) => {
  const { blood } = req.user;

  const { category, title, allowed } = req.query;

  const query = {};
  category && (query.category = category);
  title && (query.title = new RegExp(title, "i"));
  allowed &&
    (query[`groupBloodNotAllowed.${blood}`] = allowed.toLowerCase() === "true");

  const productsList = await Product.find(query);

  res.json(productsList);
};

module.exports = getProducts;
