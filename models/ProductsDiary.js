const { Schema, model } = require("mongoose");

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

    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "product",
          required: [true, "Provide the productId"],
        },

        weight: {
          type: Number,
          required: [true, "Provide the total weight of the product"],
        },

        calories: {
          type: Number,
          required: [true, "Provide the total quantity of calories"],
        },
      },
    ],

    totalCalories: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: false }
);

module.exports = model("consumed-product", ProductsDiary);
