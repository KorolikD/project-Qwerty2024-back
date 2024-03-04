const { registration, login, logout } = require("../controllers/auth");
const { getCurrent, updateAvatar, updateUser } = require("../controllers/user");
const { validateBody, authenticate, upload } = require("../middlewares");
const { registerSchema, loginSchema, updateSchema } = require("../schemas");

const authRouter = require("express").Router();

authRouter.post("/register", validateBody(registerSchema), registration);

authRouter.post("/login", validateBody(loginSchema), login);

authRouter.post("/logout", authenticate, logout);

authRouter.get("/current", authenticate, getCurrent);

authRouter.patch(
  "/params",
  authenticate,
  validateBody(updateSchema),
  updateUser
);

authRouter.patch(
  "/avatar",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

module.exports = authRouter;
