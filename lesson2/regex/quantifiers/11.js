/*
Rules:
	- matches line of text
	- contains either 3 comma separated numbers or 6
*/

let regex = /^((\d+,){2}|(\d+,){5,})\d+$/g; // tricky!

console.log('123,456,789,123,345'.match(regex)); // null
console.log('123,456,,789,123'.match(regex)); // null
console.log('23,56,7'.match(regex)); // match
console.log('13,45,78,23,45,34'.match(regex)); // match
console.log('13,45,78,23,45,34,56'.match(regex)); // match
