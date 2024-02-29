const { ctrlWrapper } = require("../../helpers");
const login = require("./login");
const logout = require("./logout");
const registration = require("./registration");

module.exports = {
  registration: ctrlWrapper(registration),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
};
