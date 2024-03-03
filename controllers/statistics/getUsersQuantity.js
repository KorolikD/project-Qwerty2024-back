const { User } = require("../../models");

const getUsersQuantity = async (req, res) => {
  const result = await User.countDocuments({
    token: { $exists: true, $ne: "" },
  });
  res.json(result);
};

module.exports = getUsersQuantity;
