const { registration, login, logout } = require("../controllers/auth");
const { getCurrent, updateUser, updateParams } = require("../controllers/user");
const { validateBody, authenticate } = require("../middlewares");
const {
  registerSchema,
  loginSchema,
  subscriptionSchema,
} = require("../schemas");

const authRouter = require("express").Router();

// дописати логіку відносно ТЗ
authRouter.post("/register", validateBody(registerSchema), registration);

authRouter.post("/login", validateBody(loginSchema), login);

authRouter.post("/logout", authenticate, logout);

// змінити логіку відносно ТЗ
authRouter.get("/current", authenticate, getCurrent);

// написати логіку відносно ТЗ
authRouter.patch("/params", authenticate, updateParams);

// змінити логіку відносно ТЗ
authRouter.patch(
  "/",
  authenticate,
  validateBody(subscriptionSchema),
  updateUser
);

module.exports = authRouter;
