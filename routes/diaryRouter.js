const {
  addEatenProduct,
  addDoneExercise,
  deleteDoneExercise,
  deleteEatenProduct,
  getInfoForDay,
} = require("../controllers/diary");
const { validateBody, isValidId, authenticate } = require("../middlewares");
const { addEatenProductSchema, addDoneExerciseSchema } = require("../schemas");

const diaryRouter = require("express").Router();

diaryRouter.post(
  "/product",
  authenticate,
  validateBody(addEatenProductSchema),
  isValidId,
  addEatenProduct
);

diaryRouter.delete(
  "/product/:consumedProductId",
  authenticate,
  isValidId,
  deleteEatenProduct
);

diaryRouter.post(
  "/exercise",
  authenticate,
  validateBody(addDoneExerciseSchema),
  isValidId,
  addDoneExercise
);

diaryRouter.delete(
  "/exercise/:completedWorkoutId",
  authenticate,
  isValidId,
  deleteDoneExercise
);

diaryRouter.get("/", authenticate, getInfoForDay);

module.exports = diaryRouter;
