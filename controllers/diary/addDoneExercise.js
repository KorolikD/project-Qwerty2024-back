const { HttpError } = require("../../helpers");
const { ExerciseDiary } = require("../../models");
const Exercise = require("../../models/Exercise");

const addDoneExercise = async (req, res) => {
  const { _id: owner } = req.user;

  const { exercise, date } = req.body;

  const exerciseData = await Exercise.findOne({ _id: exercise });
  if (!exerciseData) {
    throw HttpError(400, "Check exerciseId");
  }
  const { burnedCalories, time } = exerciseData;

  const foundedDiary = await ExerciseDiary.findOne({ date, owner });
  
  if (!foundedDiary) {
    const newExercise = await ExerciseDiary.create({
      owner,
      date,
      exercises: exerciseData,
      burnedCalories: burnedCalories,
      time: time,
    });
    res.json(newExercise);
    return;
  }

  const result = await ExerciseDiary.findByIdAndUpdate(
    foundedDiary._id,
    {
      $inc: { burnedCalories: +burnedCalories, time: +time },
      $push: { exercises: exerciseData },
    },
    { new: true }
  );
  res.json(result);
};

module.exports = addDoneExercise;
