const { Schema, model } = require("mongoose");

const Regexps = { EMAIL: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ };
const Enums = {
  BLOOD: [1, 2, 3, 4],
  SEX: ["male", "female"],
  LEVEL_ACTIVITY: [1, 2, 3, 4, 5],
};

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: 2,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: Regexps.EMAIL,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
      minlength: 6,
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default:
        "https://t4.ftcdn.net/jpg/06/35/83/71/360_F_635837151_QaS3vQk9cP4iWX1fTOXVac11kVWvfVDl.jpg",
    },
    height: {
      type: Number,
      default: null,
      min: 130,
    },
    currentWeight: {
      type: Number,
      default: null,
      min: 35,
    },
    desiredWeight: {
      type: Number,
      default: null,
      min: 35,
    },
    birthday: {
      type: Date,
      default: null,
      validate: {
        validator: function (value) {
          const birthdate = new Date(value);
          const maxDate = new Date();
          maxDate.setFullYear(maxDate.getFullYear() - 18);
          return birthdate <= maxDate;
        },
        message: (props) => `${props.value} is not at least 18 years ago`,
      },
    },
    blood: {
      type: Number,
      default: null,
      enum: Enums.BLOOD,
    },
    sex: {
      type: String,
      default: null,
      enum: Enums.SEX,
    },
    levelActivity: {
      type: Number,
      default: null,
      enum: Enums.LEVEL_ACTIVITY,
    },
    bmr: {
      type: Number,
      default: null,
    },
    dpa: {
      type: Number,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post(["save", "findOneAndUpdate"], (error, doc, next) => {
  const { name, code } = error;

  const isConflict = name === "MongoServerError" && code === 11000;
  if (isConflict) {
    error.status = 409;
    error.message = "Provided email already exists";
  }

  next();
});

const User = model("user", userSchema);

module.exports = User;
