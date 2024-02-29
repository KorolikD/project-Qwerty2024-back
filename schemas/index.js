const {
  createContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
} = require("./contactsSchemas");

const {
  registerSchema,
  loginSchema,
  subscriptionSchema,
} = require("./authSchemas");

module.exports = {
  createContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
  registerSchema,
  loginSchema,
  subscriptionSchema,
};
