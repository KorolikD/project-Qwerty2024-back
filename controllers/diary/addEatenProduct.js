const { HttpError } = require("../../helpers");
const { ProductsDiary, Product } = require("../../models");

const addEatenProduct = async (req, res) => {
  const { _id: ownerId } = req.user;

  const { productId, date } = req.body;

  const productData = await Product.findOne({ _id: productId });

  const { calories } = productData;
  if (!productData) {
    throw HttpError(400, "Check productId");
  }

  const foundedDiary = await ProductsDiary.findOne({ date, ownerId });

  if (!foundedDiary) {
    const newProduct = await ProductsDiary.create({
      ownerId,
      date,
      products: productData,
      totalCalories: calories,
    });
    res.json(newProduct);
    return;
  }

  const result = await ProductsDiary.findByIdAndUpdate(
    foundedDiary._id,
    {
      $inc: { totalCalories: +calories },
      $push: { products: productData },
    },
    { new: true }
  );
  res.json(result);
};

module.exports = addEatenProduct;
