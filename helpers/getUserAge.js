const getUserAge = (birthdate) => {
  const today = new Date();
  const birthdateObj = new Date(birthdate);

  if (isNaN(birthdateObj)) {
    throw new Error("Incorrect birthdate");
  }

  let age = today.getFullYear() - birthdateObj.getFullYear();
  const monthDiff = today.getMonth() - birthdateObj.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthdateObj.getDate())
  ) {
    age--;
  }

  return age;
};

module.exports = getUserAge;
