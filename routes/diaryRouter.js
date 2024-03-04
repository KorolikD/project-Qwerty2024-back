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
} = require("../schemas/diarySchemas");

const diaryRouter = require("express").Router();

diaryRouter.post(
  "/product",
  validateBody(addEatenProductSchema),
  authenticate,
  addEatenProduct
);

diaryRouter.post(
  "/exercise",
  validateBody(addDoneExerciseSchema),
  authenticate,
  addDoneExercise
);

diaryRouter.delete("/exercise", authenticate, deleteDoneExercise);

diaryRouter.delete("/product", authenticate, deleteEatenProduct);

diaryRouter.get("/info", authenticate, getInfoForDay);

module.exports = diaryRouter;
