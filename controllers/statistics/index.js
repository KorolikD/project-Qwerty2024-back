const { ctrlWrapper } = require("../../helpers");
const getUsersQuantity = require("./getUsersQuantity");
const getVideosQuantity = require("./getVideosQuantity");

module.exports = {
  getVideosQuantity: ctrlWrapper(getVideosQuantity),
  getUsersQuantity: ctrlWrapper(getUsersQuantity),
};
