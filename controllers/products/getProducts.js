const { HttpError } = require("../../helpers");
const { Product } = require("../../models");

const getProducts = async (req, res) => {
  const { blood } = req.user;

  const { category, title, allowed, pageNumber, pageSize } = req.query;

  const query = {};
  category && (query.category = category);
  title && (query.title = new RegExp(title, "i"));
  allowed &&
    (query[`groupBloodNotAllowed.${blood}`] = allowed.toLowerCase() === "true");

  const result = await Product.paginate(query, {
    page: pageNumber || 1,
    limit: pageSize || 30,
  });

  const { docs, totalDocs, limit, page, totalPages } = result;

  res.json({ products: docs, totalDocs, limit, page, totalPages });
};

module.exports = getProducts;
