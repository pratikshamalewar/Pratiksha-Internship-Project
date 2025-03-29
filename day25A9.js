// 9 Capitalize array elements
function capitalizeArray(array) {
  return array.map(item => item.toUpperCase());
}
const myArray = ['apple', 'banana', 'cherry'];
const capitalizedArray = capitalizeArray(myArray);

console.log(capitalizedArray);