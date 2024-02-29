const colors = require("colors");

const path = require("path");
const configPath = path.join(__dirname, "config", ".env");
require("dotenv").config({ path: configPath });

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { errorHandler, urlNotFound } = require("./middlewares");

const { contactsRouter, authRouter } = require("./routes");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/users", authRouter);
app.use("/api/contacts", contactsRouter);

app.use(urlNotFound);
app.use(errorHandler);

module.exports = app;
