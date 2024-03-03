const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const productSchema = new Schema(
  {
    weight: {
      type: Number,
      required: [true, "Weight is required"],
    },
    calories: {
      type: Number,
      required: [true, "Calories is required"],
    },
    category: {
      type: String,
      enum: [
        "alcoholic drinks",
        "berries",
        "cereals",
        "dairy",
        "dried fruits",
        "eggs",
        "fish",
        "flour",
        "fruits",
        "meat",
        "mushrooms",
        "nuts",
        "oils and fats",
        "poppy",
        "sausage",
        "seeds",
        "sesame",
        "soft drinks",
        "vegetables and herbs",
      ],
      required: [true, "Category is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    groupBloodNotAllowed: {
      1: Boolean,
      2: Boolean,
      3: Boolean,
      4: Boolean,
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.plugin(mongoosePaginate);

const Product = model("product", productSchema);

module.exports = Product;
