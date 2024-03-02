const { ctrlWrapper } = require("../../helpers");
const getCurrent = require("./getCurrent");
const updateUser = require("./updateUser");
const updateAvatar = require("./updateAvatar");

module.exports = {
  getCurrent: ctrlWrapper(getCurrent),
  updateUser: ctrlWrapper(updateUser),
  updateAvatar: ctrlWrapper(updateAvatar),
};
