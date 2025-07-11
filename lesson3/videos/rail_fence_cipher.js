/*
input: cipher or not yet encoded message
output: either decoded message or encoded message

Rules:
	- Message written downwards on successive rails of an imaginary fence.
	- Message is read diagonally going DOWN at first then UP when reaching the last rail.
	- first row has 7 characters each split by 3 ...
	- second row has 12 characters each split by 2 ..
	- third row has 6 characters 2 outside .. and 3 ... dots
	With each successive row, we add a period. 

Assumptions:

Questions:
	- Are there always 3 rows or does it get longer as we go?
	- will input always be a string?
	- what do we do with an empty input?
	- first row will have 7 values
	- second row 12
	- third row... ? 6 in the example given
	- What characters are allowed in the cipher?
		- \n?

Examples:

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

// WE ARE DISCOVERED FLEE AT ONCE

// WECRLTEERDSOEEFEAOCAIVDEN, length of 25

// I . . . e . . . g . . . . . . . . . . . . . . . .
// . h . v . a . o . . . . . . . . . . . . . . . . .
// . . a . . . d . . . . . . . . . . . . . . . . . .

// I have a dog

// ieghvaoad => length of 9



	- read in a zig zag.

*/