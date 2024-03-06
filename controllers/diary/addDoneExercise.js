const { HttpError } = require("../../helpers");
const { ExerciseDiary, Exercise } = require("../../models");

const addDoneExercise = async (req, res) => {
  const { _id: ownerId } = req.user;

  const { exerciseId, date, time, burnedCalories } = req.body;

  const exerciseData = await Exercise.findOne({ _id: exerciseId });

  if (!exerciseData) {
    throw HttpError(400, "Check exerciseId");
  }

  const foundedDiary = await ExerciseDiary.findOne({ date, ownerId });

  const newUserWorkoutTemplate = {
    ownerId,
    date,
    exercises: [{ exerciseId, time, burnedCalories }],
    burnedCalories,
    totalTime: time,
  };

  if (!foundedDiary) {
    const userCompletedWorkout = await ExerciseDiary.create(
      newUserWorkoutTemplate
    );

    res.json(userCompletedWorkout);
    return;
  }
  const upDateUserExerciseDiary = await ExerciseDiary.findByIdAndUpdate(
    foundedDiary._id,
    {
      $inc: { burnedCalories: +burnedCalories, totalTime: +time },
      $push: {
        exercises: {
          exerciseId,
          time,
          burnedCalories,
        },
      },
    },
    { new: true }
  );

  res.json(upDateUserExerciseDiary);
};

module.exports = addDoneExercise;
