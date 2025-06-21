// Filter Abstraction Simplifies things Monumentally:

/*
Now, the solution doesn't use mechanics.
We take the array and filter in only odd numbers without having to deal with the mechanics
of how things are working.

The higher the abstraction, the more declarative and maintainable your code is.
The more mechanical it is, the harder it is to read and maintain.
*/

function isOddNumber(number) {
	return number % 2 === 1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = array.filter(num => isOddNumber(num));

console.log(oddNumbers); // 1, 3, 5, 7, 9

// An Even more Abstracted Way!

let odd2 = array.filter(isOddNumber); // so cool!

console.log(odd2); // [1, 3, 5, 7, 9]