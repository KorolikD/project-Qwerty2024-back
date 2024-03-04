const { Schema, model } = require("mongoose");

const dateRegexp = /^\d{2}\/\d{2}\/\d{4}$/;

const ExerciseDiary = new Schema(
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
    exercises: [],
    burnedCalories: {
      type: Number,
      default: 0,
    },
    totalTime: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("completed-workout", ExerciseDiary);
