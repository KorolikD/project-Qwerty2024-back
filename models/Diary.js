const { Schema, model } = require("mongoose");

const dateRegexp = /^\d{2}\/\d{2}\/\d{4}$/;

const Diary = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    products: [],
    date: {
      type: String,
      required: [true, "Provide date"],
      match: [dateRegexp, "Invalid date format. Please use dd/mm/yyyy"],
    },
    calories: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("diary", Diary);
