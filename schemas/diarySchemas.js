const Joi = require("joi");
const { Regexps } = require("../config");

const addEatenProductSchema = Joi.object({
  productId: Joi.string().required(),
  date: Joi.string().pattern(Regexps.DATE).required().messages({
    "string.pattern.base":
      "{{#label}} with value {:[.]} fails to match the required pattern: 01/01/2024",
  }),
  weight: Joi.number().required(),
  calories: Joi.number().required(),
});

const addDoneExerciseSchema = Joi.object({
  exerciseId: Joi.string().required(),
  date: Joi.string().pattern(Regexps.DATE).required().messages({
    "string.pattern.base":
      "{{#label}} with value {:[.]} fails to match the required pattern: 01/01/2024",
  }),
  time: Joi.number().required(),
  burnedCalories: Joi.number().required(),
});

module.exports = {
  addEatenProductSchema,
  addDoneExerciseSchema,
};
