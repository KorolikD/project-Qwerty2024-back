const { Schema, model } = require("mongoose");
const { Product } = require("./Product");

const dateRegexp = /^\d{2}\/\d{2}\/\d{4}$/;

const ProductsDiary = new Schema(
  {
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },

    date: {
      type: String,
      required: [true, "Provide date"],
      match: [dateRegexp, "Invalid date format. Please use dd/mm/yyyy"],
    },

    products: {
      type: Array,
      productId: {
        type: Schema.Types.ObjectId,
        ref: "products",
      },
      default: [],
    },

    totalCalories: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: false }
);

module.exports = model("consumed-product", ProductsDiary);
