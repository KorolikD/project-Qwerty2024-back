const { registration, login, logout } = require("../controllers/auth");
const { getCurrent, updateAvatar, updateUser } = require("../controllers/user");
const { validateBody, authenticate, upload } = require("../middlewares");
const { registerSchema, loginSchema, updateSchema } = require("../schemas");

const authRouter = require("express").Router();

// дописати логіку відносно ТЗ
authRouter.post("/register", validateBody(registerSchema), registration);

authRouter.post("/login", validateBody(loginSchema), login);

authRouter.post("/logout", authenticate, logout);

// змінити логіку відносно ТЗ
authRouter.get("/current", authenticate, getCurrent);

// написати логіку відносно ТЗ
authRouter.patch(
  "/params",
  authenticate,
  validateBody(updateSchema),
  updateUser
);

// змінити логіку відносно ТЗ
authRouter.patch(
  "/avatar",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

module.exports = authRouter;
