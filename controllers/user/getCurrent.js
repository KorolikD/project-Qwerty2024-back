const getCurrent = async (req, res) => {
  const {
    name,
    email,
    _id,
    avatarURL,
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    levelActivity,
    bmr,
    dpa,
    createdAt,
  } = req.user;
  res.json({
    name,
    email,
    _id,
    avatarURL,
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    levelActivity,
    bmr,
    dpa,
    createdAt,
  });
};

module.exports = getCurrent;
