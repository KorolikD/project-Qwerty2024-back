const { createDiarySchema, updateDiarySchema } = require("./diarySchemas");

const { registerSchema, loginSchema, updateSchema } = require("./authSchemas");

module.exports = {
  createDiarySchema,
  updateDiarySchema,
  registerSchema,
  loginSchema,
  updateSchema,
};
