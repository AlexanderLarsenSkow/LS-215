// forEach is excellent for iterating over arrays.

// can also define an index and array parameter! So nice.

let names = ['Alex', 'John', 'Sarah'];

names.forEach((name, index, array) => console.log(name, index, array));
// Alex 0 [ 'Alex', 'John', 'Sarah' ]
// John 1 [ 'Alex', 'John', 'Sarah' ]
// Sarah 2 [ 'Alex', 'John', 'Sarah' ]

// forEach returns undefined, not useful. Side Effects to be useful.

// myForEach

/*
	input: array, callback function
	output: undefined

	should iterate through and do something with the callback function.
*/

function myForEach(array, func) {
	for(let index = 0; index < array.length; index += 1) {
		func(array[index], index, array);
	}
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);

myForEach([4, 5, 12, 23, 3], getMin);
console.log(min); 