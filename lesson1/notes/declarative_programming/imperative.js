// Imperative Style
/*
This style is focused on the steps/mechanics of solving a problem.
Each line has a purpose but you have to understand the dev's implementation.

newArray tells we are creating a new array
% 2 === 1 tells us we are working with odd numbers
push tells us we are adding to the new array.
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];

for (let i = 0; i < array.length; i += 1) {
	if (array[i] % 2 === 1) {
		newArray.push(array[i]);
	}
}

console.log(newArray); // [1, 3, 5, 7, 9]

// Imperative Style with Function Abstractions

/*
Abstracting the details of logic that might not be immediately obvious, like the % expression above
can make the code more readable.
*/

let newArray2 = [];

for (let i = 0; i < array.length; i += 1) {
	if (isOddNumber(array[i])) {
		newArray2.push(array[i]);
	}
}

console.log(newArray2); // [1, 3, 5, 7, 9]

function isOddNumber(number) {
	return number % 2 === 1;
}