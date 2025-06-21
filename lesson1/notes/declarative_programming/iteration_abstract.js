// forEach raises the abstraction level. Now array[i] is changed to element.
// We no longer have to iterate through with a for loop, a very mechanical process.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];

const isOddNumber = number => number % 2 === 1;

array.forEach(element => {
	if (isOddNumber(element)) {
		newArray.push(element);
	}
});

console.log(newArray); // [1, 3, 5, 7, 9]

