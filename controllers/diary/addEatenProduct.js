const { HttpError } = require("../../helpers");
const { Diary } = require("../../models");
const Product = require("../../models/Product");

const addEatenProduct = async (req, res) => {
  const { _id: owner } = req.user;

  const { product, date } = req.body;

  const productData = await Product.findOne({ _id: product });
  const {calories} = productData
  if (!productData) {
    throw HttpError(400, "Check productId");
  }

  const foundedDiary = await Diary.findOne({ date, owner });

  if (!foundedDiary) {
    const newProduct = await Diary.create({
      owner,
      date,
      products: productData,
      calories: calories,
    });
    res.json(newProduct);
    return;
  }

  const result = await Diary.findByIdAndUpdate(
    foundedDiary._id,
    {
      $inc: { calories: +calories },
      $push: { products: productData },
    },
    { new: true }
  );
  res.json(result);
};

module.exports = addEatenProduct;
