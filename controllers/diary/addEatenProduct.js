const { HttpError } = require("../../helpers");
const { ProductsDiary, Product } = require("../../models");

const addEatenProduct = async (req, res) => {
  // * беремо ІД авторизованого юзера
  const { _id: ownerId } = req.user;

  // * Забираємо тіло запиту
  const { productId, date } = req.body;

  const productData = await Product.findOne({ _id: productId });

  if (!productData) {
    throw HttpError(400, "Check productId");
  }

  const { calories } = productData;

  const foundedDiary = await ProductsDiary.findOne({ date, ownerId });

  if (!foundedDiary) {
    const newProductDiary = await ProductsDiary.create({
      ownerId,
      date,
      products: [productId],
      totalCalories: calories,
    });

    const populatedResult = await ProductsDiary.findById(
      newProductDiary._id
    ).populate({
      path: "products",
      model: Product,
    });

    res.json(populatedResult);
    return;
  }

  const resultAfterUpdate = await ProductsDiary.findByIdAndUpdate(
    foundedDiary._id,
    {
      $inc: { totalCalories: +calories },
      $push: { products: productId },
    },
    { new: true }
  ).populate({
    path: "products",
    model: Product,
  });

  res.json(resultAfterUpdate);
};

module.exports = addEatenProduct;
