/*	
	Input: string repping octal number
	output: decimal Number

	Rules:
		given an octal number, convert it to a decimal.
		Decimals are base-10
		don't use parseInt

		linear combination of powers of 10:
			233 =>
			3 multiplied by 10 to the 0th power: 3
			3 => multiplied by 10 to the 1st power: 30
			2 => multiplied by 10 to the second power: 200

			233

		Conversion Process:
			  233                          // octal
					= 2*8^2 + 3*8^1 + 3*8^0
					= 2*64  + 3*8   + 3*1
					= 128   + 24    + 3
					= 155                          // decimal

	Examples:
		octalToDecimal('1');           // 1 // 1 * 8 to the 0th power = 1
		octalToDecimal('10');          // 8 // 1 * 8 to the 1st power = 8, 0 * 1 = 0, 8. Add them up.
		octalToDecimal('130');         // 88
			1 * 8 squared, 64. 3 * 8 to teh first, 24, 0 * 1 = 0. 64 + 24 + 0 = 88

		octalToDecimal('17');          // 15
			1 * = 8, 7 * 1 = 7, 8 + 7 = 15

		octalToDecimal('2047');        // 1063
		octalToDecimal('011');         // 9

	Data Structures:
		Size of the octal string is important.
		Starting power should always be size of octal number - 1.
		Add all values from each point to an array.

		iterate through string with for loop. convert each value to number and multiply by
			8 to the current power.

		reduce and sum the array.

	Algo:
		Create a power variable equal to the size of the octal - 1.
		Iterate through the string starting at the first number/char
		convert char to number, multiply by 8 to the current power.
		add this value to array
		sum the array with reduce.
*/

const sum = digits => digits.reduce((sum, num) => sum + num);

function octalToDecimal(octalString) {
	const base = 8;
	const digits = [];
	let power = octalString.length - 1;
	
	for (let i = 0; i < octalString.length; i += 1) {
		let digit = Number(octalString[i]);
		let conversion = digit * (base ** power);

		digits.push(conversion);
		power -= 1;
	}

	return sum(digits);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9