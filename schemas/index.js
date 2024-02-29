const { createDiarySchema, updateDiarySchema } = require("./diarySchemas");

const {
  registerSchema,
  loginSchema,
  subscriptionSchema,
} = require("./authSchemas");

module.exports = {
  createDiarySchema,
  updateDiarySchema,
  registerSchema,
  loginSchema,
  subscriptionSchema,
};
