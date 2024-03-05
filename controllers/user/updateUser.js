const { User } = require("../../models");
const { levelActivities } = require("../../data");
const { getUserAge } = require("../../helpers");

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const { currentWeight, height, birthday, levelActivity, sex } = req.body;

  const age = getUserAge(birthday);

  const correction = sex === "male" ? 5 : -161;
  const bmr = Math.round(
    (10 * currentWeight + 6.25 * height - 5 * age + correction) *
      levelActivities[levelActivity]
  );

  const user = await User.findByIdAndUpdate(
    _id,
    { ...req.body, bmr, dpa: 110 },
    { new: true, runValidators: true }
  ).select("-password -updatedAt -token ");

  res.json({
    ...user._doc,
  });
};

module.exports = updateUser;
