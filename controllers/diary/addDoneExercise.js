const { HttpError } = require("../../helpers");
const { ExerciseDiary, Exercise, Product } = require("../../models");

const addDoneExercise = async (req, res) => {
  const { _id: ownerId } = req.user;

  const { exerciseId, date } = req.body;

  const exerciseData = await Exercise.findOne({ _id: exerciseId });

  const { burnedCalories, time } = exerciseData;
  if (!exerciseData) {
    throw HttpError(400, "Check exerciseId");
  }

  const foundedDiary = await ExerciseDiary.findOne({ date, ownerId });

  if (!foundedDiary) {
    const newExercise = await ExerciseDiary.create({
      ownerId,
      date,
      exercises: exerciseData,
      burnedCalories: burnedCalories,
      totalTime: time,
    });
    res.json(newExercise);
    return;
  }

  const result = await ExerciseDiary.findByIdAndUpdate(
    foundedDiary._id,
    {
      $inc: { burnedCalories: +burnedCalories, totalTime: +time },
      $push: { exercises: exerciseData },
    },
    { new: true }
  );
  res.json(result);
};

module.exports = addDoneExercise;
