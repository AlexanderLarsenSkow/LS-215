// Doubler Problem:
/*
Take the answers to the questions and create Rules and Test Cases for them:

input: array
output: every value in the array is doubled.

Assumptions:
	duplicating the element.

Rules:
	- if el is a number, multiply by 2. normal numbers
	- if el is a string, repeat itself 2 times.
	- other types of elements should be duplicated in the array.
	- don't mutate the input array
	- special number values should remain unchanged (NaN, Infinity)
	- empty strings should be unchanged.
	- array can have mixture of elements
	- non-prim elements should have reference duplicated, not value.
	- elements that appear more than one time should be treated normally.
	- nested arrays / nested objects should be treated normally.
	
	- input array contains empty slots, they should be removed.
	- inner array contains empty slots, should be unchanged.
	- all array properties should stay the same.
	- if array is empty return empt array.
	
	- if multiple arguments are passed, ignore all but first arg
	- if arg is string, treat is as array of chars.
	- if arg is a non-negative integer, treat it as an array of digits
	- if the arg is an object, treat it as an array of property values
	- all other kinds are invalid, and should return string 'invalid input'

Examples:

// Generic Cases:

	// Numbers and Strings
	doubler([1, 2, 3]) === [2, 4, 6]
	doubler(['I', 'have', 'a', 'question']) === ['II', 'havehave', 'aa', 'questionquestion']

	// Mixture of Elements
	doubler([1, 'abc', 2, 'def']) === [2, 'abcabc', 4, 'defdef']
	doubler([NaN, 1, 2, Infinity]) === [NaN, 2, 4, Infinity]

// other types should be duplicated
		doubler([null]) === [null, null]
		doubler([true, false]) === [true, true, false, false]
		doubler([undefined]) === [undefined, undefined];
		doubler([1, []]) === [2, [], []]
		doubler([{foo: 'bar'}]) === [{foo: 'bar',}, {foo: 'bar'}]
	
// Edge Cases:
	doubler([NaN, 1]) // [NaN, 2]
	doubler([Infinity, -Infinity]) // [Infinity, -Infinity]
	doubler([-.42, -5, 0, -0]) // [-.84, -10, 0, -0]
	doubler(['']) // ['']
	


	// No Mutation
		let array = [1, 2, 3]
		doubler(array) === [2, 4, 6]
		console.log(array); // [1, 2, 3]

	// Empty String
	doubler(['', 'a']) === ['', 'aa']

*/