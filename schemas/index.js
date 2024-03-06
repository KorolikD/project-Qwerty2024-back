const {
  addEatenProductSchema,
  addDoneExerciseSchema,
} = require("./diarySchemas");
const { registerSchema, loginSchema, updateSchema } = require("./authSchemas");

module.exports = {
  addEatenProductSchema,
  addDoneExerciseSchema,
  registerSchema,
  loginSchema,
  updateSchema,
};
