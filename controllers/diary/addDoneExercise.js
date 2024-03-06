const { HttpError } = require("../../helpers");
const { ExerciseDiary, Exercise } = require("../../models");

const addDoneExercise = async (req, res) => {
  // * беремо ІД авторизованого юзера
  const { _id: ownerId } = req.user;

  // * Забираємо дані з тіла запиту
  const { exerciseId, date, time, burnedCalories } = req.body;

  // * Шукаємо вправу в базі
  const exerciseData = await Exercise.findOne({ _id: exerciseId });

  // * Якщо нема помилка
  if (!exerciseData) {
    throw HttpError(400, "Check exerciseId");
  }

  // * Шукаємо об'єкт в ExerciseDiary по ключам дати та власника
  const foundedDiary = await ExerciseDiary.findOne({ date, ownerId });

  // * Формуємо тіло запису
  const newUserWorkoutTemplate = {
    ownerId,
    date,
    exercises: [{ exerciseId, time, burnedCalories }],
    burnedCalories,
    totalTime: time,
  };

  // * Якщо немає створюємо новий
  if (!foundedDiary) {
    const userCompletedWorkout = await ExerciseDiary.create(
      newUserWorkoutTemplate
    );

    res.json(userCompletedWorkout);
    return;
  }
  // * Якщо є допиши існуючий запис даними
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
