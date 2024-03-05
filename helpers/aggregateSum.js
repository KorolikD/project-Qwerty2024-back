const aggregateSum = async (model, field) => {
  const aggregatedResult = await model.aggregate([
    {
      $match: {
        [field]: { $exists: true },
      },
    },
    {
      $group: {
        _id: null,
        total: { $sum: `$${field}` },
      },
    },
  ]);

  return aggregatedResult.length > 0 ? aggregatedResult[0].total : 0;
};

module.exports = aggregateSum;