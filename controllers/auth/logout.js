const { User } = require("../../models");

const logout = async (req, res) => {
  const { _id: id } = req.user;

  await User.findByIdAndUpdate(id, { token: "" });

  res.status(204).json({ message: "Logout success" });
};

module.exports = logout;
