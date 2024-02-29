const Joi = require('joi');

const Regexps = { EMAIL: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ };

const registerSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().pattern(Regexps.EMAIL).required().messages({
    'string.pattern.base':
      '{{#label}} with value {:[.]} fails to match the required pattern: example@example.com',
  }),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(Regexps.EMAIL).required().messages({
    'string.pattern.base':
      '{{#label}} with value {:[.]} fails to match the required pattern: example@example.com',
  }),
  password: Joi.string().min(6).required(),
});

module.exports = { registerSchema, loginSchema };
