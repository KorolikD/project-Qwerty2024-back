const { aggregateArrayLength, aggregateSum } = require("../../helpers");
const { Exercise, User, ExerciseDiary } = require("../../models");

const getStatistics = async (req, res) => {
  const videosQuantity = await Exercise.countDocuments({
    gifUrl: { $exists: true, $ne: "" },
  });

  const usersQuantity = await User.countDocuments({
    token: { $exists: true, $ne: "" },
  });

  const totalCaloriesBurned = await aggregateSum(
    ExerciseDiary,
    "burnedCalories"
  );

  const totalTime = await aggregateSum(ExerciseDiary, "totalTime");
  const totalWorkoutHours = Math.round(totalTime / 60);

  const totalExercisesQuantity = await aggregateArrayLength(
    ExerciseDiary,
    "exercises"
  );

  res.json({
    videosQuantity,
    usersQuantity,
    totalCaloriesBurned,
    totalWorkoutHours,
    totalExercisesQuantity,
  });
};

module.exports = getStatistics;
