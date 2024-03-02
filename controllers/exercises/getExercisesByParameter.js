const { HttpError } = require("../../helpers");
const Exercise = require("../../models/Exercise");

const getExercisesByParameter = async (req, res) => {
  const { key, value } = req.query;

  if (!key || !value) {
    throw HttpError(400, "Provide parameters");
  }

  const exercisesList = await Exercise.find({ [key]: value });

  res.json(exercisesList);
};

module.exports = getExercisesByParameter;
