const { aggregateArrayLength, aggregateSum } = require("../../helpers");
const {
  Exercise,
  User,
  ProductsDiary,
  ExerciseDiary,
} = require("../../models");

const getStatistics = async (req, res) => {
  const videosQuantity = await Exercise.countDocuments({
    gifUrl: { $exists: true, $ne: "" },
  });

  const usersQuantity = await User.countDocuments({
    token: { $exists: true, $ne: "" },
  });

  const totalCalories = await aggregateSum(ProductsDiary, "totalCalories");

  const totalTime = await aggregateSum(ExerciseDiary, "totalTime");

  const totalExercisesQuantity = await aggregateArrayLength(ExerciseDiary, "exercises");

  res.json({
    videosQuantity,
    usersQuantity,
    totalCalories,
    totalTime,
    totalExercisesQuantity,
  });
};

module.exports = getStatistics;
