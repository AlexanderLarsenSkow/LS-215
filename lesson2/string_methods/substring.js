/*
	returns a substring of the original string

	2 arguments: 
		start index, end index. End index is exclusive

		The bigger index is always the end index
*/

let state = 'Mississippi';

console.log(state.substring(2, 8)); // ssissi
console.log(state.substring(8, 2)); // ssissi