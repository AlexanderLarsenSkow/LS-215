// Reduce iterations affect future iterations because of the accumulator.

function add(previousValue, element) {
	return previousValue + element;
}

let count = [1, 2, 3, 4, 5];
console.log(count.reduce(add)); // 15

// Accumulator (here previousValue) adds each element to its value.

/* Can have 4 arguments:
	- accumulator, the value that accumulates the elements
	- current Element, the current element in the array
	- current Index, the index of the current element
	- the array itself

Can also have an optional second argument that sets the accumulator to some value.
	Can be set to anything:
		[], {}, 1, 100, '', 'abc', etc

	This is the Initial Value, which is the first element if not specified. In this case,
		JS starts processing at teh second element, since the first was the initial.

	Return: 
		return of final callback function call.
*/