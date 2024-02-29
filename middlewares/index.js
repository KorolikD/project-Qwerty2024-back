const isValidId = require("./isValidId");
const validateBody = require("./validateBody");
const errorHandler = require("./errorHandler");
const urlNotFound = require("./urlNotFound");
const authenticate = require("./authenticate");

module.exports = {
  isValidId,
  validateBody,
  errorHandler,
  urlNotFound,
  authenticate,
};
