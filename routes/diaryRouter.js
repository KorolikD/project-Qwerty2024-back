const {
  addEatenProduct,
  addDoneExercise,
  deleteDoneExercise,
  deleteEatenProduct,
  getInfoForDay,
} = require("../controllers/diary");
const { validateBody, isValidId, authenticate } = require("../middlewares");
const {
  addEatenProductSchema,
  addDoneExerciseSchema,
  deleteDoneExerciseSchema,
  deleteEatenProductSchema,
} = require("../schemas");

const diaryRouter = require("express").Router();

diaryRouter.post(
  "/product",
  authenticate,
  validateBody(addEatenProductSchema),
  isValidId,
  addEatenProduct
);

diaryRouter.delete(
  "/product/delete",
  authenticate,
  validateBody(deleteEatenProductSchema),
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
  "/exercise/delete",
  authenticate,
  validateBody(deleteDoneExerciseSchema),
  isValidId,
  deleteDoneExercise
);

diaryRouter.get("/", authenticate, getInfoForDay);

module.exports = diaryRouter;
