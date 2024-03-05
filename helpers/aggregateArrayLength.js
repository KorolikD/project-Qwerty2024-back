const aggregateArrayLength = async (model, arrayName) => {
  const result = await model.aggregate([
    {
      $match: {
        [arrayName]: { $exists: true, $ne: [] },
      },
    },
    {
      $project: {
        totalExercisesQuantity: { $size: `$${arrayName}` },
      },
    },
  ]);

  return result.length > 0 ? result[0].totalExercisesQuantity : 0;
};

module.exports = aggregateArrayLength;
