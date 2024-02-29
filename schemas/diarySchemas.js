const Joi = require("joi");

const createDiarySchema = Joi.object({});

const updateDiarySchema = Joi.object({}).or(""); //прописуємо назви полів

module.exports = {
  createDiarySchema,
  updateDiarySchema,
};
// Для валідації кидаємо Джой схему в validateBody
