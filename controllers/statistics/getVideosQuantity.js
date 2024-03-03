const Exercise = require("../../models/Exercise");

const getVideosQuantity = async (req, res) => {
  const result = await Exercise.countDocuments({
    gifUrl: { $exists: true, $ne: "" },
  });
  res.json(result);
};

module.exports = getVideosQuantity;
