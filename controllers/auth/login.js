const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const { JWT_SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: "23h",
  });
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    { token },
    { new: true }
  ).select("-password -token -updatedAt");

  res.json({
    token,
    user: updatedUser,
  });
};

module.exports = login;
