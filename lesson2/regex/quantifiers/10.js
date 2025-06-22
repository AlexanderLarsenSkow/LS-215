/*
	Rules:
		- matches full line
		- contains at least 3 but no more than 6 consecutive comma separated numbers.
		- first number not started with comma and last number not ended with commma.

		3 Expected Matches
*/

let regex = /^(\d+,){2,5}\d+$/g;

console.log('123,456,789,123,345'.match(regex)); // match
console.log('123,456,,789,123'.match(regex)); // null
console.log('23,56,7'.match(regex)); // match
console.log('13,45,78,23,45,34'.match(regex)); // match
console.log('13,45,78,23,45,34,56'.match(regex)); // null
