const { User } = require("../../models");

const updateUser = async (req, res) => {
  const { _id, email } = req.user;
  const { subscription } = req.body;

  await User.findByIdAndUpdate(_id, { subscription });

  res.json({ email, subscription });
};

module.exports = updateUser;
