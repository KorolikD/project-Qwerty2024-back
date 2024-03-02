const { Schema, model } = require("mongoose");

const filterSchema = new Schema(
  {
    filter: {
      type: String,
      required: [true, "Filter is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    imgURL: {
      type: String,
      required: [true, "Image url is required"],
    },
  },
  { versionKey: false, timestamps: true }
);
const Filter = model("filter", filterSchema);

module.exports = Filter;
