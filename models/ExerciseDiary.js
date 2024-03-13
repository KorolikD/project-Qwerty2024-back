const { Schema, model } = require("mongoose");

const { Regexps } = require("../config");

const ExerciseDiary = new Schema(
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

    exercises: [
      {
        exerciseId: {
          type: Schema.Types.ObjectId,
          ref: "exercise",
          required: [true, "Provide the exerciseId"],
        },

        time: {
          type: Number,
          min: 0.1666666666666667,

          required: [true, "Provide the total time of the workout"],
        },

        burnedCalories: {
          type: Number,
          min: 1,
          required: [true, "Provide the total quantity of burned calories"],
        },
      },
    ],

    burnedCalories: {
      type: Number,
      default: 0,
    },

    totalTime: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: false }
);

module.exports = model("completed-workout", ExerciseDiary);
