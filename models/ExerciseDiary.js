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

    exercises: [
      {
        exerciseId: {
          type: Schema.Types.ObjectId,
          ref: "exercise",
          required: [true, "Provide the exerciseId"],
        },

        bodyPart: {
          type: String,
        },

        equipment: {
          type: String,
        },

        name: {
          type: String,
        },

        target: {
          type: String,
        },

        time: {
          type: Number,
          required: [true, "Provide the total time of the workout"],
        },

        burnedCalories: {
          type: Number,
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
