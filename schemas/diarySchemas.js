const Joi = require("joi");

const dateRegexp = /^\d{2}\/\d{2}\/\d{4}$/;

// const createDiarySchema = Joi.object({});

// const updateDiarySchema = Joi.object({}).or(""); //прописуємо назви полів

// !Продукти
const addEatenProductSchema = Joi.object({
  productId: Joi.string().required(),
  date: Joi.string().pattern(dateRegexp).required(),
  weight: Joi.number().required(),
  calories: Joi.number().required(),
});

// !Вправи
const addDoneExerciseSchema = Joi.object({
  exerciseId: Joi.string().required(),
  date: Joi.string().pattern(dateRegexp).required(),
  time: Joi.number().required(),
  burnedCalories: Joi.number().required(),
});

module.exports = {
  // createDiarySchema,
  // updateDiarySchema,
  addEatenProductSchema,
  addDoneExerciseSchema,
};

// Для валідації кидаємо Джой схему в validateBody
