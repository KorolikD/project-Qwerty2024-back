const { ctrlWrapper } = require("../../helpers");
const getAllExercises = require("./getAllExercises");
const getExercisesByParameter = require("./getExercisesByParameter");

module.exports = {
  getExercisesByParameter: ctrlWrapper(getExercisesByParameter),
  getAllExercises: ctrlWrapper(getAllExercises),
};
