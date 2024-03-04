const { ObjectId } = require("bson");
const { Diary } = require("../../models");


const deleteProduct = async (req, res) => {
  const { _id: owner } = req.user;

  const { product, date } = req.body;
  const productId = ObjectId.createFromHexString(product);

  const foundedDiary = await Diary.findOne({
    date,
    owner,
    "products._id": productId,
  });

  if (!foundedDiary) {
    res
      .status(200)
      .json({ message: "You can't delete product what you didn't eat" });
    return;
  }

  const { _id: id, products } = foundedDiary;

  const productIndex = products.findIndex((item) =>
    item._id.equals(productId)
  );

  const removedProduct = products.splice(productIndex, 1)[0];

  const result = await Diary.findOneAndUpdate(
    id,
    {
      $set: { products: products },
      $inc: {
        calories: -removedProduct.calories
      },
    },
    { new: true }
  );

  res.json(result);
};

module.exports = deleteProduct;
