const { ctrlWrapper } = require("../../helpers");
const getCurrent = require("./getCurrent");
const updateUser = require("./updateUser");
const updateParams = require("./updateParams");

module.exports = {
  getCurrent: ctrlWrapper(getCurrent),
  updateUser: ctrlWrapper(updateUser),
  updateParams: ctrlWrapper(updateParams),
};
