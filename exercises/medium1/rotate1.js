/*
input: array
output: new array where first el is moved to end of array.

Rules:
	- Take an array and place the first element at the end of the array.
	- If the input is an empty array, return an empty array.
	- If the input is not an array, return undefined.

Questions:

Examples:

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

Data Structures:
	- slice(1) and then concat with slice(0, 1)

Algo:
	1. if the input is not an array, return undefined.
	2. Take a slice from 1 to the end of array
	3. Take a slice of the first element only, a single array
	4. Return this array built together.
*/

function p(input) {
	console.log(input);
}

function rotateArray(array) {
	if (!Array.isArray(array)) return;
	if (array.length === 0) return [];

	let [first, ...rest] = array;
	return rest.concat(first);
}

p(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
p(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
p(rotateArray(['a']));                    // ["a"]
p(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
p(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
p(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
p(rotateArray());                         // undefined
p(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
p(rotateArray(array));                    // [2, 3, 4, 1]
p(array);                                 // [1, 2, 3, 4]