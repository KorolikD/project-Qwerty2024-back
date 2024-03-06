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
  addEatenProduct
);

diaryRouter.post(
  "/exercise",
  authenticate,
  validateBody(addDoneExerciseSchema),
  addDoneExercise
);

diaryRouter.delete("/exercise", authenticate, deleteDoneExercise);

diaryRouter.delete("/product", authenticate, deleteEatenProduct);

diaryRouter.get("/", authenticate, getInfoForDay);

module.exports = diaryRouter;
