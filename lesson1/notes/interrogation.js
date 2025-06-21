function odd(number) {
  return number % 2 === 1;
}

let count = [1, 2, 3, 4, 5, 6];
console.log(count.every(odd)); // false, not all are odd
console.log(count.some(odd)); // true, at least one is odd.

/*
Callback takes 3 arguments:
	- current element
	- current index
	- array being processed

every method iterates over every element until one returns a falsey value. Then it returns false.
if it makes it to the end, it returns true.

some returns true if one of the elements returns a truthy value in the callback, else if it
completes iteration, it returns false.
*/

function myOwnEvery(array, func) {
	for (let i = 0; i < array.length; i += 1) {
		if (!func(array[i])) return false;
	}

	return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery(['a', 'b', 1, 'c'], isAString));

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));              // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false