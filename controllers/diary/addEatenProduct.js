const { HttpError } = require("../../helpers");
const { ProductsDiary, Product } = require("../../models");

const addEatenProduct = async (req, res) => {
  // * беремо ІД авторизованого юзера
  const { _id: ownerId } = req.user;

  // * Забираємо дані з тіла запиту
  const { productId, date, weight, calories } = req.body;

  // * Шукаємо продукт в базі
  const productData = await Product.findOne({ _id: productId });

  // * Якщо нема помилка
  if (!productData) {
    throw HttpError(400, "Check productId");
  }

  // * Шукаємо об'єкт в ProductsDiary по ключам дати та власника
  const foundedDiary = await ProductsDiary.findOne({ date, ownerId });

  // * Формуємо тіло запису
  const newUserProductTemplate = {
    ownerId,
    date,
    products: [{ productId, weight, calories }],
    totalCalories: calories,
  };

  // * Якщо немає створюємо новий
  if (!foundedDiary) {
    const usersConsumedProduct = await ProductsDiary.create(
      newUserProductTemplate
    );

    res.json(usersConsumedProduct);
    return;
  }

  // * Якщо є допиши існуючий запис даними
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
