const { ProductsDiary, Product } = require("../../models");

const deleteEatenProduct = async (req, res) => {
  const { _id: ownerId } = req.user;

  const { consumedProductId, date } = req.body;

  const foundedDiary = await ProductsDiary.findOne({
    date,
    ownerId,
    "products._id": consumedProductId,
  });

  if (!foundedDiary) {
    res.status(409).json({
      message: "You can't delete a product that you haven't consumed",
    });
    return;
  }

  const { calories } = foundedDiary.products.find((record) => {
    return record._id.toString() === consumedProductId;
  });

  const resultAfterUpdate = await ProductsDiary.findOneAndUpdate(
    {
      ownerId,
      date,
      "products._id": consumedProductId,
    },
    {
      $inc: {
        totalCalories: -calories,
      },
      $pull: {
        products: {
          _id: consumedProductId,
        },
      },
    },
    { new: true }
  ).populate("products.productId", "title category groupBloodNotAllowed");

  res.json(resultAfterUpdate);
};

module.exports = deleteEatenProduct;
