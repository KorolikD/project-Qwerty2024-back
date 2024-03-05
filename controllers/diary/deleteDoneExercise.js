const { ExerciseDiary, Exercise } = require("../../models");

const deleteDoneExercise = async (req, res) => {
  const { _id: ownerId } = req.user;

  const { exerciseId, date } = req.body;

  const foundedDiary = await ExerciseDiary.findOne({
    date,
    ownerId,
    exercises: { $in: [exerciseId] },
  });

  if (!foundedDiary) {
    res
      .status(409)
      .json({ message: "You can't delete exercise what you didn't do" });
    return;
  }

  const { _id: diaryId, exercises } = foundedDiary;

  const exerciseIndex = exercises.indexOf(exerciseId);

  const exercisesInfo = await ExerciseDiary.findById({ _id: diaryId }).populate(
    {
      path: "exercises",
      model: Exercise,
    }
  );

  const { burnedCalories, time } = exercisesInfo.exercises[exerciseIndex];

  exercises.splice(exerciseIndex, 1)[0];

  const resultAfterUpdate = await ExerciseDiary.findOneAndUpdate(
    diaryId,
    {
      $set: { exercises: exercises },
      $inc: {
        burnedCalories: -burnedCalories,
        totalTime: -time,
      },
    },
    { new: true }
  ).populate({
    path: "exercises",
    model: Exercise,
  });

  res.json(resultAfterUpdate);
};

module.exports = deleteDoneExercise;
