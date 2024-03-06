const {
  addEatenProductSchema,
  deleteEatenProductSchema,

  addDoneExerciseSchema,
  deleteDoneExerciseSchema,
} = require("./diarySchemas");

const { registerSchema, loginSchema, updateSchema } = require("./authSchemas");

module.exports = {
  addEatenProductSchema,
  deleteEatenProductSchema,

  addDoneExerciseSchema,
  deleteDoneExerciseSchema,

  registerSchema,
  loginSchema,
  updateSchema,
};
