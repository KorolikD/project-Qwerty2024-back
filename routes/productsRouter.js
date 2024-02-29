const productsRouter = require("express").Router();
const { getAllCategories, getProducts } = require("../controllers/products");
const { authenticate } = require("../middlewares");

productsRouter.get("/categories", authenticate, getAllCategories);

productsRouter.get("/", authenticate, getProducts);

module.exports = productsRouter;
