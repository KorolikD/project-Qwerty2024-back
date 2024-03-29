const { Schema, model } = require("mongoose");
const { Regexps, Enums } = require("../config");

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
        "https://res.cloudinary.com/powerpulse/image/upload/v1710411233/no-user-img_sll2uf.png",
    },
    height: {
      type: Number,
      default: null,
      min: 150,
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
      type: String, // змінив з Date на String
      default: null,
      // validate: {
      //   validator: function (value) {
      //     const birthdate = new Date(value);
      //     const maxDate = new Date();
      //     maxDate.setFullYear(maxDate.getFullYear() - 18);
      //     return birthdate <= maxDate;
      //   },
      //   message: (props) => `${props.value} is not at least 18 years ago`,
      // },
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
