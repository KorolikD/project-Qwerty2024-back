function getUserAge(birthday) {
  // Розбиваємо строку на складові частини
  const parts = birthday.split("/");

  // Перевірка, чи вказана корректна дата
  const birthDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
  if (isNaN(birthDate.getTime())) {
    throw new Error("Invalid date format. Use DD/MM/YYYY pattern.");
  }

  // Обчислення кількості років
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

module.exports = getUserAge;
