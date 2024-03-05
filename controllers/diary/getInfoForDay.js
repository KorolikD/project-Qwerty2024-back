const {
  ProductsDiary,
  ExerciseDiary,
  Exercise,
  Product,
} = require("../../models");

const getInfoForDay = async (req, res) => {
  const { _id: ownerId } = req.user;

  const { date } = req.query;

  const foundProducts = await ProductsDiary.findOne({
    ownerId,
    date,
  }).populate({ path: "products", model: Product });

  const foundExercises = await ExerciseDiary.findOne({
    ownerId,
    date,
  }).populate({ path: "exercises", model: Exercise });

  if (!foundProducts && !foundExercises) {
    return res
      .status(200)
      .json({ message: "You don't have products and exercises for this date" });
  }

  res.json({
    foundExercises,
    foundProducts,
  });
};

module.exports = getInfoForDay;
