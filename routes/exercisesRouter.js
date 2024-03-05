const {
  getExercisesByParameter,
  getAllExercises,
} = require("../controllers/exercises");
const { authenticate } = require("../middlewares");

const exercisesRouter = require("express").Router();

exercisesRouter.get("/params", authenticate, getExercisesByParameter);

exercisesRouter.get("/", authenticate, getAllExercises);

module.exports = exercisesRouter;
