/*
input: string number
output: boolean based on if it passed the Luhn Checksum

Rules:
	- Credit Card Numbers / Social Insurance, checkd against apended check digit, generates full num
	- How it works:
		- Counting from the rightmost digit and moving left, double the value of every second digit
		- After doubling, if the number doubled is greater than 10, - 9 for the result.
		- After the doubling of digits, add them all together to get the checksum.
		- if the total ends in 0, then the number is valid. % 10 is 0, it's good.

	Input Rules:
		- input is a string, containing numbers.
		- All non-numeric characters are ignored but VALID.
		- return false if teh string is empty or has no digits

Assumptions:
	- number input
	- check digit is last digit?
	- returning true or false booleans

Questions:
	- what to do with empty string?
	- what to do with other characters?
	- will it always be a string?
	- Is a string of all 0's possible?
	- Are the strings of varying lengths? How long should each string be?
	- What happens if we multiply an odd number? Do we round up or down?

Examples:
		- 1111 becomes 2121 => double 1, double, 2 + 1 + 2 + 1 => 6, which is the checksum.
		- 8763 becomes 7733 => 6 x 2 => 12, 12 - 9 = 3, 2 x 8 = 16, 16 - 9 = 7 + 7 + 3 + 3 = 20

// Generic Cases

// Passes
console.log(luhnCheck('8763') === true); //  7733 checksum 20
console.log(luhnCheck('3131') === true); // 2323 checksum 10
console.log(luhnCheck('353524') === true); // 65 65 44 checksum 30

// Doubling - 9
console.log(luhnCheck('7221') === true); // 10, 3241

// Non digit chars
console.log(luhnCheck('353abc52a4') === true); // 65 65 44 checksum 30

// False Cases
console.log(luhnCheck('1111') === false); // 6
console.log(luhnCheck('4343') === false); // 8383 => 22
console.log(luhnCheck('11111') === false); // 12121 => 7

// Non digit false chars
console.log(luhnCheck('434ab3') === false); // 8383 => 22

// Empy string or no digits
console.log(luhnCheck('') === false);
console.log(luhnCheck('abcdef') === false); //

Data Structures:
	replace all non-digits.
	split into an array and transform with map.
	'1111a' => '1111' => ['1', '1', '1', '1'], => [2, 1, 2, 1] sum this array

	['1', '1', '2', '1'] => ['1', '2', '1', '1'] => [1, 4, 1, 2] => 8

Algo:
	1. replace all non-digits (\D) with empty strings.
		a. if this is an empty string, return false.
	2. split the string of digits into an array of digits.
	3. Reverse and map the array: with an index
		a. if the index is odd, then take a helper function of the string converted to a number.
		b. This helper: if the number multipled by 2 is less than 10, return that expression.
		c. Else (equal or greater to 10) return the expression minus 9.
	4. sum the array with reduce.
	5. If this sum is a multiple of 10, then it is valid checksum and return true. else, false. 
	
['4', '3', '4', '3'] => ['3', '4', '3', '4'] => [3, 8, 3, 8] => 22 22 % 10 !== 0, so return false.

*/

function luhnFormula(number) {
	let double = number * 2;

	if (double < 10) {
		return double;
	} else {
		return double - 9;
	}
}

function totalVal(numbers) {
	return numbers.reduce((total, num) => total + num);
}

function luhnCheck(candidate) {
	let digits = candidate.replace(/[\D]/g, '');
	if (digits === '') return false;

	let luhnTransform = digits.split('').reverse().map((num, index) => {
		num = Number(num);

		if (index % 2 === 1) {
			return luhnFormula(num);
		} else {
			return num;
		}
	})

	return totalVal(luhnTransform);
}

function isValidLuhn(candidate) {
	let check = luhnCheck(candidate);
	if (!check) return false;

	return check % 10 === 0;
}

// Generic Cases

// Passes
console.log(isValidLuhn('8763') === true); //  7733 checksum 20
console.log(isValidLuhn('1131') === true); // 2323 checksum 10, 1313 => 1 6 1 2
console.log(isValidLuhn('353524') === true); // 65 65 44 checksum 30
console.log(isValidLuhn('2323 2005 7766 3554') === true); 

// Doubling - 9
console.log(isValidLuhn('6221') === true); // 10, 3241, 1225 => 1 4 2 5

// Non digit chars
console.log(isValidLuhn('353abc52a4') === true); // 65 65 44 checksum 30

// False Cases
console.log(isValidLuhn('1111') === false); // 6
console.log(isValidLuhn('4343') === false); // 8383 => 22
console.log(isValidLuhn('11111') === false); // 12121 => 7

// Non digit false chars
console.log(isValidLuhn('434ab3') === false); // 8383 => 22

// Empty string or no digits
console.log(isValidLuhn('') === false);
console.log(isValidLuhn('abcdef') === false); //

/*
	Find the total reduction.

	Algo:
		If the luhnCheck is false, with teh input,
			then add a '0' to the end. Then feed that into the luhn Check problem.
			After this, take the sum and gets it remainder from 10.
			the checkDigit should be equal to 10 - the remainder.
*/
// console.log(luhnCheck('553 6677 5002 3232'))
// '553 6677 5002 3232'
// 156 3657 1002 6262 => 56 % 10 => 10 - remainder === 4;
//  console.log(luhnCheck('2323 2005 7766 3354'));

/*
	Algo:
		If the luhnCheck is false, with teh input,
			then add a '0' to the end. Then feed that into the luhn Check problem.
			After this, take the sum and gets it remainder from 10.
			the checkDigit should be equal to 10 - the remainder.

*/

function addLuhnDigit(candidate) {
	if (isValidLuhn(candidate)) return candidate;
	let sum = luhnCheck(candidate + '0');
	let remainder = sum % 10;
	
	const checkDigit = 10 - remainder;
	return candidate + String(checkDigit);
}

console.log(addLuhnDigit('2323 2005 7766 355') === '2323 2005 7766 3554');
console.log(addLuhnDigit('876') === '8763'); //  7733 checksum 20
console.log(addLuhnDigit('113') === '1131'); // 2323 checksum 10, 1313 => 1 6 1 2
console.log(addLuhnDigit('35352') === '35352'); // 65 65 44 checksum 30

