const filterExercises = (array) => {
  const bodyPart = array.filter((item) => item.filter === "Body parts");
  const equipment = array.filter((item) => item.filter === "Equipment");
  const target = array.filter((item) => item.filter === "Muscles");

  return { bodyParts, equipment, muscles };
};

module.exports = filterExercises;
