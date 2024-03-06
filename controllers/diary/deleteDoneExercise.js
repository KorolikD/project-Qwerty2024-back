const { ExerciseDiary, Exercise } = require("../../models");

const deleteDoneExercise = async (req, res) => {
  const { _id: ownerId } = req.user;

  const { completedWorkoutId, date } = req.body;

  const foundedDiary = await ExerciseDiary.findOne({
    date,
    ownerId,
    "exercises._id": completedWorkoutId,
  });

  if (!foundedDiary) {
    res
      .status(409)
      .json({ message: "You can't delete an exercise that you haven't done" });
    return;
  }

  const { burnedCalories, time } = foundedDiary.exercises.find((record) => {
    return record._id.toString() === completedWorkoutId;
  });

  const resultAfterUpdate = await ExerciseDiary.findOneAndUpdate(
    {
      ownerId,
      date,
      "exercises._id": completedWorkoutId,
    },
    {
      $inc: {
        burnedCalories: -burnedCalories,
        totalTime: -time,
      },
      $pull: {
        exercises: {
          _id: completedWorkoutId,
        },
      },
    },
    { new: true }
  ).populate("exercises.exerciseId", "bodyPart equipment name target");

  res.json(resultAfterUpdate);
};

module.exports = deleteDoneExercise;
