const { ObjectId } = require("bson");
const { ExerciseDiary } = require("../../models");

const deleteDoneExercise = async (req, res) => {
  const { _id: ownerId } = req.user;

  const { exerciseId, date } = req.body;

  const fixedExerciseId = ObjectId.createFromHexString(exerciseId);

  const foundedDiary = await ExerciseDiary.findOne({
    date,
    ownerId,
    "exercises._id": fixedExerciseId,
  });

  if (!foundedDiary) {
    res
      .status(409)
      .json({ message: "You can't delete exercise what you didn't do" });
    return;
  }

  const { _id: diaryId, exercises } = foundedDiary;

  const exerciseIndex = exercises.findIndex((item) =>
    item._id.equals(fixedExerciseId)
  );

  const removedExercise = exercises.splice(exerciseIndex, 1)[0];

  const result = await ExerciseDiary.findOneAndUpdate(
    diaryId,
    {
      $set: { exercises: exercises },
      $inc: {
        burnedCalories: -removedExercise.burnedCalories,
        totalTime: -removedExercise.time,
      },
    },
    { new: true }
  );

  res.json(result);
};

module.exports = deleteDoneExercise;
