const { ProductsDiary, Product } = require("../../models");

const deleteEatenProduct = async (req, res) => {
  const { _id: ownerId } = req.user;

  const { productId, date } = req.body;

  const foundedDiary = await ProductsDiary.findOne({
    date,
    ownerId,
    products: { $in: [productId] },
  });

  if (!foundedDiary) {
    res
      .status(409)
      .json({ message: "You can't delete product what you didn't eat" });
    return;
  }

  const { _id: diaryId, products } = foundedDiary;

  const productIndex = products.indexOf(productId);

  const productsInfo = await ProductsDiary.findById({ _id: diaryId }).populate({
    path: "products",
    model: Product,
  });

  const { calories } = productsInfo.products[productIndex];

  products.splice(productIndex, 1)[0];

  const resultAfterUpdate = await ProductsDiary.findOneAndUpdate(
    diaryId,
    {
      $set: { products: products },
      $inc: {
        totalCalories: -calories,
      },
    },
    { new: true }
  ).populate({
    path: "products",
    model: Product,
  });

  res.json(resultAfterUpdate);
};

module.exports = deleteEatenProduct;
