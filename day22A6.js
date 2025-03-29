// 6. Generating Random Numbers Within a Range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1, 10)); // Example: Random number between 1 and 10
