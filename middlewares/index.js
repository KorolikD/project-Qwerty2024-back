const isValidId = require("./isValidId");
const validateBody = require("./validateBody");
const errorHandler = require("./errorHandler");
const urlNotFound = require("./urlNotFound");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  isValidId,
  validateBody,
  errorHandler,
  urlNotFound,
  authenticate,
  upload,
};
