const Regexps = {
  EMAIL: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  DATE: /^\d{2}\/\d{2}\/\d{4}$/,
};
const Enums = {
  BLOOD: [1, 2, 3, 4],
  SEX: ["male", "female"],
  LEVEL_ACTIVITY: [1, 2, 3, 4, 5],
};

module.exports = { Regexps, Enums };
