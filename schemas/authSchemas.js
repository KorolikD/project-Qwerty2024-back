const Joi = require("joi");
const { Regexps, Enums } = require("../config");

const registerSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().pattern(Regexps.EMAIL).required().messages({
    "string.pattern.base":
      "{{#label}} with value {:[.]} fails to match the required pattern: example@example.com",
  }),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(Regexps.EMAIL).required().messages({
    "string.pattern.base":
      "{{#label}} with value {:[.]} fails to match the required pattern: example@example.com",
  }),
  password: Joi.string().min(6).required(),
});

const updateSchema = Joi.object({
  name: Joi.string().min(2).disallow(null).required(),
  email: Joi.string()
    .pattern(Regexps.EMAIL)
    .disallow(null)
    .required()
    .messages({
      "string.pattern.base":
        "{{#label}} with value {:[.]} fails to match the required pattern: example@example.com",
    }),
  height: Joi.number().min(150).disallow(null).required(),
  currentWeight: Joi.number().min(35).disallow(null).required(),
  desiredWeight: Joi.number().min(35).disallow(null).required(),

  birthday: Joi.string().pattern(Regexps.DATE).required().messages({
    "string.pattern.base":
      "{{#label}} with value {:[.]} fails to match the required pattern: 01/01/2024",
  }),
  // birthday: Joi.date()
  //   .max("now")
  //   .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)))
  //   .disallow(null)
  //   .required(),
  blood: Joi.number()
    .equal(...Enums.BLOOD)
    .disallow(null)
    .required(),
  sex: Joi.string()
    .equal(...Enums.SEX)
    .disallow(null)
    .required(),
  levelActivity: Joi.number()
    .equal(...Enums.LEVEL_ACTIVITY)
    .disallow(null)
    .required(),
});

module.exports = { registerSchema, loginSchema, updateSchema };
