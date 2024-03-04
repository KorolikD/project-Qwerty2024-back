const colors = require("colors");

const path = require("path");
const configPath = path.join(__dirname, "config", ".env");
require("dotenv").config({ path: configPath });

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { errorHandler, urlNotFound } = require("./middlewares");

const {
  productsRouter,
  authRouter,
  exercisesRouter,
  diaryRouter,
  statisticsRouter,
} = require("./routes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/users", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/exercises", exercisesRouter);
app.use("/api/diary", diaryRouter);
app.use("/api/statistics", statisticsRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(urlNotFound);
app.use(errorHandler);

module.exports = app;

//* "/users/register";
//* "/users/login";
//* "/users/logout";
//* "/users/current";
//* "/users/params";
// * "/users/avatar"
// * "/products/categories"
// * "/products"
// * "/exercises"
// * "/exercises/params"
// TODO /statistics
