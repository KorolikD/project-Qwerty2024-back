const { Exercise, User } = require("../../models");

const getStatistics = async (req, res) => {
  const videosQuantity = await Exercise.countDocuments({
    gifUrl: { $exists: true, $ne: "" },
  });

  const usersQuantity = await User.countDocuments({
    token: { $exists: true, $ne: "" },
  });
  res.json({ videosQuantity, usersQuantity });
};

module.exports = getStatistics;
