const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const idKeys = [
    "id",
    "exerciseId",
    "completedWorkoutId",
    "productId",
    "consumedProductId",
  ];

  const id = idKeys.reduce((foundId, key) => {
    return foundId || req.params[key] || req.body[key] || req.query[key];
  }, null);

  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not a valid id`));
  }
  next();
};

module.exports = isValidId;
