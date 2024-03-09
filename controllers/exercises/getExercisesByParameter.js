const { HttpError } = require("../../helpers");
const { Exercise } = require("../../models");

const getExercisesByParameter = async (req, res) => {
  const { key, value, pageNumber, pageSize } = req.query;

  if (!key || !value) {
    throw HttpError(400, "Provide parameters");
  }

  const result = await Exercise.paginate(
    { [key]: value },
    { page: pageNumber || 1, limit: pageSize || 18 }
  );

  const { docs, totalDocs, limit, page, totalPages } = result;

  res.json({ exercises: docs, totalDocs, limit, page, totalPages });
};

module.exports = getExercisesByParameter;
