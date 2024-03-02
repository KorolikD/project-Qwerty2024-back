const {
  getExercisesByParameter,
  getAllExercises,
} = require("../controllers/exercises");
const { validateBody, isValidId, authenticate } = require("../middlewares");

const exercisesRouter = require("express").Router();

exercisesRouter.get("/param", authenticate, getExercisesByParameter);

exercisesRouter.get("/", authenticate, getAllExercises);

module.exports = exercisesRouter;
