const { Schema, model } = require("mongoose");

const Regexps = { EMAIL: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ };

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

    token: String,
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

module.exports = User;
