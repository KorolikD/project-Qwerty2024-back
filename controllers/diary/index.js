const { ctrlWrapper } = require("../../helpers");
const addDoneExercise = require("./addDoneExercise");
const addEatenProduct = require("./addEatenProduct");
const deleteDoneExercise = require("./deleteDoneExercise");
const deleteProduct = require("./deleteProduct");
const getInfoForDay = require("./getInfoForDay");

module.exports = {
  addEatenProduct: ctrlWrapper(addEatenProduct),
  addDoneExercise: ctrlWrapper(addDoneExercise),
  deleteDoneExercise: ctrlWrapper(deleteDoneExercise),
  deleteProduct: ctrlWrapper(deleteProduct),
  getInfoForDay: ctrlWrapper(getInfoForDay),
};