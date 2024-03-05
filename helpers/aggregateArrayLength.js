const aggregateArrayLength = async (model, arrayName) => {
  const result = await model.aggregate([
    {
      $match: {
        [arrayName]: { $exists: true, $ne: [] },
      },
    },
    {
      $group: {
        _id: null,
        totalExercisesQuantity: {
          $sum: { $size: `$${arrayName}` },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalExercisesQuantity: 1,
      },
    },
  ]);

  return result.length > 0 ? result[0].totalExercisesQuantity : 0;
};

module.exports = aggregateArrayLength;
