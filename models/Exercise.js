const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const exerciseSchema = new Schema(
  {
    bodyPart: {
      type: String,
      required: [true, "Body part is required"],
    },
    equipment: {
      type: String,
      required: [true, "Equipment is required"],
    },
    gifUrl: {
      type: String,
      required: [true, "Gif url is required"],
    },
    name: {
      type: String,
      required: [true, "Name url is required"],
    },
    target: {
      type: String,
      required: [true, "Target is required"],
    },
    burnedCalories: {
      type: Number,
      required: [true, "Burned calories is required"],
    },
    time: {
      type: Number,
      required: [true, "Time is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

exerciseSchema.plugin(mongoosePaginate);

const Exercise = model("exercise", exerciseSchema);

module.exports = Exercise;
