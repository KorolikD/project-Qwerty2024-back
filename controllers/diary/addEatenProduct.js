const { HttpError } = require("../../helpers");
const { ProductsDiary, Product } = require("../../models");

const addEatenProduct = async (req, res) => {
  const { _id: ownerId } = req.user;

  const { productId, date, weight, calories } = req.body;

  const productData = await Product.findOne({ _id: productId });

  if (!productData) {
    throw HttpError(400, "Check productId");
  }

  const foundedDiary = await ProductsDiary.findOne({ date, ownerId });

  const newUserProductTemplate = {
    ownerId,
    date,
    products: [{ productId, weight, calories }],
    totalCalories: calories,
  };

  if (!foundedDiary) {
    const usersConsumedProduct = await ProductsDiary.create(
      newUserProductTemplate
    );

    res.json(usersConsumedProduct);
    return;
  }

  const updatedUserProductDiary = await ProductsDiary.findByIdAndUpdate(
    foundedDiary._id,
    {
      $inc: { totalCalories: +calories },
      $push: { products: { productId, weight, calories } },
    },
    { new: true }
  );

  res.json(updatedUserProductDiary);
};

module.exports = addEatenProduct;
