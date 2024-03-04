const { ObjectId } = require("bson");
const { ProductsDiary } = require("../../models");

const deleteEatenProduct = async (req, res) => {
  const { _id: ownerId } = req.user;

  const { productId, date } = req.body;

  const fixedProductId = ObjectId.createFromHexString(productId);

  const foundedDiary = await ProductsDiary.findOne({
    date,
    ownerId,
    "products._id": fixedProductId,
  });
  if (!foundedDiary) {
    res
      .status(409)
      .json({ message: "You can't delete product what you didn't eat" });
    return;
  }

  const { _id: diaryId, products } = foundedDiary;

  const productIndex = products.findIndex((item) =>
    item._id.equals(fixedProductId)
  );

  const removedProduct = products.splice(productIndex, 1)[0];

  const result = await ProductsDiary.findOneAndUpdate(
    diaryId,
    {
      $set: { products: products },
      $inc: {
        totalCalories: -removedProduct.calories,
      },
    },
    { new: true }
  );

  res.json(result);
};

module.exports = deleteEatenProduct;
