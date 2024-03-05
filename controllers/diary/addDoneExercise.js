const { HttpError } = require("../../helpers");
const { ExerciseDiary, Exercise } = require("../../models");

const addDoneExercise = async (req, res) => {
  const { _id: ownerId } = req.user;

  const { exerciseId, date } = req.body;

  const exerciseData = await Exercise.findOne({ _id: exerciseId });

  if (!exerciseData) {
    throw HttpError(400, "Check exerciseId");
  }

  const { burnedCalories, time } = exerciseData;

  const foundedDiary = await ExerciseDiary.findOne({ date, ownerId });

  if (!foundedDiary) {
    const newExercise = await ExerciseDiary.create({
      ownerId,
      date,
      exercises: [exerciseId],
      burnedCalories: burnedCalories,
      totalTime: time,
    });

    const populatedResult = await ExerciseDiary.findById(
      newExercise._id
    ).populate({
      path: "exercises",
      model: Exercise,
    });

    res.json(populatedResult);
    return;
  }

  const resultAfterUpdate = await ExerciseDiary.findByIdAndUpdate(
    foundedDiary._id,
    {
      $inc: { burnedCalories: +burnedCalories, totalTime: +time },
      $push: { exercises: exerciseId },
    },
    { new: true }
  ).populate({
    path: "exercises",
    model: Exercise,
  });

  res.json(resultAfterUpdate);
};

module.exports = addDoneExercise;
