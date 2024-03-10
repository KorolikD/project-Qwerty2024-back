const { Schema, model } = require("mongoose");

const { Regexps } = require("../config");

const ProductsDiary = new Schema(
  {
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },

    date: {
      type: String,
      required: [true, "Provide date"],
      match: [Regexps.DATE, "Invalid date format. Please use dd/mm/YYYY"],
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
          min: 1,
          required: [true, "Provide the total weight of the product"],
        },

        calories: {
          type: Number,
          min: 1,
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
