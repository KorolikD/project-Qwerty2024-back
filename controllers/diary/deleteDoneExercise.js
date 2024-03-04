const { ExerciseDiary } = require("../../models");
const { ObjectId } = require("bson");

const deleteDoneExercise = async (req, res) => {
  const { _id: owner } = req.user;

  const { exercise, date } = req.body;
  const exerciseId = ObjectId.createFromHexString(exercise);

  const foundedDiary = await ExerciseDiary.findOne({
    date,
    owner,
    "exercises._id": exerciseId,
  });

  if (!foundedDiary) {
    res
      .status(200)
      .json({ message: "You can't delete exercise what you didn't do" });
    return;
  }

  const { _id: id, exercises } = foundedDiary;

  const exerciseIndex = exercises.findIndex((item) =>
    item._id.equals(exerciseId)
  );

  const removedExercise = exercises.splice(exerciseIndex, 1)[0];

  const result = await ExerciseDiary.findOneAndUpdate(
    id,
    {
      $set: { exercises: exercises },
      $inc: {
        burnedCalories: -removedExercise.burnedCalories,
        time: -removedExercise.time,
      },
    },
    { new: true }
  );

  res.json(result);
};

module.exports = deleteDoneExercise;
