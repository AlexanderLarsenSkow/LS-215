// Can also declare index and array parameters! So nice.

let count = [1, 2, 3, 4, 5];
let filtered = count.filter((number, index, array) => number % 2 === 0);

console.log(filtered); // [2, 4]

// Returns a new array filtered based on the return value of the callback.

// 3 or 5 multiples

function multiplesOfThreeOrFive(values) {
  return values.filter(isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));  // [ 3, 5, 18, 15 ]