/*
input: string
output: object with 3 properties

Rules:
	- Given a string, return an object with 3 properties:
		- the percentage of characters that are lowercase chars.
		- percentage of characters that are uppercase chars.
		- percentage of characters that are neither.
		- String will always have at least one character.

		- How do we calculate a percentage?
			- take the length of a replacement and divide it by the total length of the string.
			- 1 / 10 === .01 * 100 => 10.00 toFixed(2)

Examples:

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Data Structure:
	- Replacements. Use replace on [a-z] and [A-Z] then on neither.

Algo:
	1. length of lowercase letters from a lowercase replacement
	2. Get length of uppercase letters from a uppercase replacement.
	3. Get length of neither letters from a no letters replacement.
	4. Divide each one by the total length of the string. Return this percentage in an object
*/

function letterPercentages(string) {
	let lowerLength = string.replace(/[^a-z]/g, '').length;
	let upperLength = string.replace(/[^A-Z]/g, '').length;
	let neitherLength = string.replace(/[a-z]/gi, '').length;

	let percentages = [lowerLength, upperLength, neitherLength].map(length => {
		return ((length / string.length) * 100).toFixed(2);
	})

	let [lowercase, uppercase, neither] = percentages;

	return {
		lowercase,
		uppercase,
		neither,
	};
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
