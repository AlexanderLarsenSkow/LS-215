/*
input: array of strings and a number
output: return 

Rules:
	- A distinct string is present only once in an array
	- Given a number k, (second arg), return the kth distinct string.
	- if there are fewer than k distinct strings, return ''

Questions:
	- What should be returned when the input is an empty array?
		- return ''
	- What should be returned when there are no distinct strings in the array?
		- return ''
	- What should be done when the number is 0?
		- return null
	- Does the number act like an index? For example, is 0 the first? or is 1 the first distinct string?
	- Can any other data types be entered for the input?
		- No
	- How should no arguments be handled?
		- return null.
	- How should more arguments be handled?
		- do nothing
	- Can a sparse array be an input?
		- No
	- How about an array that has object properties?
		- No
	- What should be done if no number or NaN is given as the second argument?
		- return ''
	- Should anything be done if Infinity or -Infinity are entered as inputs for the second arg?
		- No

	LS Questions:
		- Will we always receive 2 arguments? If not, what should I do if an argument is omitted? What
			should I do if there are more than 2 arguments?
			
		- Will the first argument always be an array? If not, what should I do?
		- Will the second argument always be an integer? If not, what should I do?
		- Will the second argument ever be 0? if so, what should I do?
			- 
		- Will the second argument ever be negative? If so, what should I do?
			- If the second argument is negative, take the positive version.
		- Can the array be sparse? If, so how should I handle missing elements?
			- no it cannot be sparse.
		- Can the array handle any number of elements?
		- Can the array be empty? If so, what should I return?
			- Yes, return ''
		- Will strings always be one character long, or can they be longer?
			- yes

input: array of strings and a number
output: return 

Rules:
	- A distinct string is present only once in an array
	- Given a number k, (second arg), return the kth distinct string.
	- if there are fewer than k distinct strings, return ''
	- If the array is empty, return ''
	- The array can have any number of elements.
	- If the number k is negative, take the positive version.
	- If either argument is omitted, return null.	
	- Strings can be longer than 1 character.

Examples:
	// Short Strings
	console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
	console.log(distinctString(["ba", "ba", "ca", "db", "1a"], 3)); // "1a"
	
	// Long Strings
	console.log(distinctString(['I', 'want', 'to', 'go', 'to', 'disneyland'], 4)); // 'disneyland'
	console.log(distinctString(['I', 'have', 'have', 'wings'], 1)); // "I"

	// Edge Cases

	// Fewer than K distinct strings
	console.log(distinctString(['a', 'a', 'b', 'a'], 2)); // ''
	console.log(distinctString(['I', 'have', 'I', 'have', 'a', 'dog'], 3)); // ''

	// Negative Number
		console.log(distinctString(['a', 'a', 'b', 'c'], -2)); // 'c'

	// Empty Array
			console.log(distinctString([]], 2)); // ''

	// Missing Args
		console.log(distinctString(2)); // null
		console.log(distinctString([])); // null
		console.log(distinctString()); // null

	Data Structures:
		Filter the array by the count of each character. Only characters that have count of 1 should
			be remaining.
			
	Algo:
		High Level:
		before:
			- take the number and set it to the absolute value of itself.
			- return null outright if either argument is missing or 0.
		1. Filter the array by characters that only appear 1 time.
		2. If teh number is greater than the length of this array, return an empty string. 
		3. Declare a count variable that increments. When it reaches the number k, return the string.
		
	Detailed:
		- Guard clause for falsey value for the arguments
		- Set the number to Math.abs of itself

	1. filter array by unique chars
		- Create a count function that returns the length of a filter call.
		- 
		- Filter the array by the count being equal to 1.
	
	2. Return '' if num is greater than length
		- Return an '' here if the number is greater than the length
		
	3. Declare a count variable
		- Iterate through the array with for of
		- increment the variable and return teh string when the count === the number.
*/

function count(array, element) {
	return array.filter(el => el === element).length;
}

function getNString(uniqueChars, maxNum) {
	let count = 0;

	for (let char of uniqueChars) {
		count += 1;
		if (maxNum === count) return char;
	}
}

function distinctString(characters, maxNum) {
	if (!characters || !maxNum) return null;
	maxNum = Math.abs(maxNum);

	let uniqueChars = characters.filter(char => count(characters, char) === 1);
	if (uniqueChars.length < maxNum) return '';

	return getNString(uniqueChars, maxNum);
}

	// Short Strings
	console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
	console.log(distinctString(["ba", "ba", "ca", "db", "1a"], 3)); // "1a"
	
	// Long Strings
	console.log(distinctString(['I', 'want', 'to', 'go', 'to', 'disneyland'], 4)); // 'disneyland'
	console.log(distinctString(['I', 'have', 'have', 'wings'], 1)); // "I"

	// Edge Cases

	// Fewer than K distinct strings
	console.log(distinctString(['a', 'a', 'b', 'a'], 2)); // ''
	console.log(distinctString(['I', 'have', 'I', 'have', 'a', 'dog'], 3)); // ''

	// Negative Number
		console.log(distinctString(['a', 'a', 'b', 'c'], -2)); // 'c'

	// Empty Array
			console.log(distinctString([], 2)); // ''

	// Missing Args
		console.log(distinctString(2)); // null
		console.log(distinctString([])); // null
		console.log(distinctString()); // null
