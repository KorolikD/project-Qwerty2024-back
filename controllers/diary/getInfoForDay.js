const { Diary, ExerciseDiary } = require("../../models");

const getInfoForDay = async (req, res) => {
  const { _id: owner } = req.user;

  const { date } = req.query;

  const foundProducts = await Diary.findOne({ owner, date });
  const foundExercises = await ExerciseDiary.findOne({ owner, date });

  if (!foundProducts && !foundExercises) {
    return res
      .status(200)
      .json({ message: "You don't have products and exercises for thid date" });
  }

  const result = {
    foundExercises,
    foundProducts,
  };
  res.json(result);
};

module.exports = getInfoForDay;
