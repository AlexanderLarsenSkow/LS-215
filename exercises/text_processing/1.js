 /*
input: string
output: true or false

rules:
 - return true if all chars in the string are uppercase, false otherwise.
 

 Examples:
 	isUppercase('t');               // false not all, false
isUppercase('T');               // true, not all 
isUppercase('Four Score');      // false, not all
isUppercase('FOUR SCORE');      // true all
isUppercase('4SCORE!');         // true, all
isUppercase('');                // true, empty string also true
*/

function isUppercase(string) {
	return string === string.toUpperCase();
}

// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true

function isUppercase2(string) {
	return /^[^a-z]*$/.test(string);
}

console.log(isUppercase2('t'));               // false
console.log(isUppercase2('T'));               // true
console.log(isUppercase2('Four Score'));      // false
console.log(isUppercase2('FOUR SCORE'));      // true
console.log(isUppercase2('4SCORE!'));         // true
console.log(isUppercase2(''));  // true