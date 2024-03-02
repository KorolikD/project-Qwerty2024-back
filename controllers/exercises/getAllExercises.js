const { filterExercises } = require("../../helpers");
const Filter = require("../../models/Filter");

const getAllExercises = async (req, res) => {
  const data = await Filter.find();

  const result = filterExercises(data);

  res.json(result);
};

module.exports = getAllExercises;
