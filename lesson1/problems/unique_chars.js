/*
	input: string
	output: true or false depending on whether all characters are unique or not.

	Rules:
		- all characters unique: true
		- if not, false
		- case doesn't matter

isAllUnique('The quick brown fox jumped over a lazy dog');  // false e 
isAllUnique('123,456,789');                                 // false ,
isAllUnique('The big apple');                               // false p
isAllUnique('The big apPlE');                               // false p 
isAllUnique('!@#$%^&*()');                                  // true all unique
isAllUnique('abcdefghijklmnopqrstuvwxyz');                  // true all unique

Data Structures:
	String iteration
	count. Create an object to count. If the count ever reaches more than 1 for any char, return false 

Algo:
	create an empty object
	iterate through the string
	if the object has the char as a property, set value to 1.
	If not, return false.
	At the end, if iteration is complete, return true.
*/

function isAllUnique(string) {
	string = string.toLowerCase();
	let count = {};

	for (let i = 0; i < string.length; i += 1) {
		let char = string[i];

		if (!count.hasOwnProperty(char)) {
			count[string[i]] = 1;
		} else {
			return false;
		}
	}

	return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                 // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true