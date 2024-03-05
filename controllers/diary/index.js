const { ctrlWrapper } = require("../../helpers");
const addDoneExercise = require("./addDoneExercise");
const addEatenProduct = require("./addEatenProduct");
const deleteDoneExercise = require("./deleteDoneExercise");
const deleteEatenProduct = require("./deleteEatenProduct");
const getInfoForDay = require("./getInfoForDay");

module.exports = {
  addEatenProduct: ctrlWrapper(addEatenProduct),
  addDoneExercise: ctrlWrapper(addDoneExercise),
  deleteDoneExercise: ctrlWrapper(deleteDoneExercise),
  deleteEatenProduct: ctrlWrapper(deleteEatenProduct),
  getInfoForDay: ctrlWrapper(getInfoForDay),
};
