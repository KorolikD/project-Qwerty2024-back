const { registration, login, logout } = require("../controllers/auth");
const { getCurrent, updateSubscription } = require("../controllers/user");
const { validateBody, authenticate } = require("../middlewares");
const {
  registerSchema,
  loginSchema,
  subscriptionSchema,
} = require("../schemas");

const authRouter = require("express").Router();

authRouter.post("/register", validateBody(registerSchema), registration);

authRouter.post("/login", validateBody(loginSchema), login);

authRouter.post("/logout", authenticate, logout);

authRouter.get("/current", authenticate, getCurrent);

authRouter.patch(
  "/",
  authenticate,
  validateBody(subscriptionSchema),
  updateSubscription
);

module.exports = authRouter;
