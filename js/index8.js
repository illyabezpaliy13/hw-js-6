const nameLenght = "Illya".length;
const surnameLenght = "Bezpaliy".length;
if (nameLenght >= 4 && surnameLenght >= 5) {
  const totalNumberLetters = nameLenght + surnameLenght;
  console.log(totalNumberLetters);
} else {
  console.log("ОЙ, неможливо виконати умову");
}