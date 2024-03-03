const { ctrlWrapper } = require("../../helpers");
const getVideosQuantity = require("./getVideosQuantity")

module.exports = {
    getVideosQuantity: ctrlWrapper(getVideosQuantity),
};
