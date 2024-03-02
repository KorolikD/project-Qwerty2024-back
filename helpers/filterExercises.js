const filterExercises = (array) => {
  const bodyParts = array.filter((item) => item.filter === "Body parts");
  const equipment = array.filter((item) => item.filter === "Equipment");
  const muscles = array.filter((item) => item.filter === "Muscles");

  return { bodyParts, equipment, muscles };
};

module.exports = filterExercises;
