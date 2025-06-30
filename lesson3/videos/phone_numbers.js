/*
input: string representation of phone number
output:

Rules:
	- phone number can contain digits, spaces, dashes, dot, and parentheses that should be ignored.
	- If less than 10 digits, this is a bad number
	- if the phone number is 10 digits, assume is good
	- If the phone number is 11 digits, and the first number is 1, trim the 1 and use last 10.
	- if the phone number is 11 digits and the first number is NOT 1, bad number
	- more than 11 digits, assume it is a bad number

	- BAD NUMBER: return string of 10 0's

Assumptions: 
	- input is a string
	- input has lots of dirty characters that need to be removed.
	- 

Examples: 
	// Generic Cases
	console.log(cleanNumber('208.999.2576')); // 2088992567
	console.log(cleanNumber('219-739-3212')); // 2197393212
	console.log(cleanNumber('(712) 321-3214')); // 7123213214

	// Less Digits
	console.log(cleanNumber('208.999')); // 0000000000
	console.log(cleanNumber('208.999.25')); // 0000000000

	// 11 Digits, first is 1
	console.log(cleanNumber('1 (208).999.2571')); // 2089992571
	console.log(cleanNumber('1 (321).999.2571')); // 3219992571

	// 11 Digits, first is NOT 1
	console.log(cleanNumber('7 (208).999.2571')); // 0000000000
	console.log(cleanNumber('8 (208).999.2571')); // 0000000000

	// More than 11 digits
	console.log(cleanNumber('7123 (208).999.2571')); // 0000000000
	console.log(cleanNumber('7 (208).999.25711234')); // 0000000000

	Data Structures:
		no data structure required here.
		Replace chars in string that aren't digits. get string of numbers.

		At this point, we want to check each case.

	Algo:
		1. Replace all non-digit characters in the string.
			- replace
			
		2. If the string has a length of 10, return this string.
			- if statements
		3. If it is less, then it is a bad number.
		4. If it has 11 digits and the first number is 1, return the number without 1.
		5. If it has 11 digits and the first number is NOT 1, it is a bad number.
		6. If it has more digits than this, it is a bad number.

		Example through Algo:
		console.log(cleanNumber('208.999.2576')); // 2088992567

		1. => '2089992576'
		2. => return this number becaues it has length of 10. EZ.
 
*/

function cleanNumber(phoneNumber) {
	let cleanPhone = phoneNumber.replace(/[\D]/g, '');
	const badNumber = '0'.repeat(10);
	const phoneLength = cleanPhone.length;

	if (phoneLength === 10) {
		return cleanPhone;
	}
	else if (phoneLength === 11 && cleanPhone[0] === '1') {
		return cleanPhone.slice(1);
	} else {
		return badNumber;
	}
}

	// Generic Cases
	console.log(cleanNumber('208.999.2576')); // 2088992567
	console.log(cleanNumber('219-739-3212')); // 2197393212
	console.log(cleanNumber('(712) 321-3214')); // 7123213214

	// 11 Digits, first is 1
	console.log(cleanNumber('1 (208).999.2571')); // 2089992571
	console.log(cleanNumber('1 (321).999.2571')); // 3219992571

	// Less Digits
	console.log(cleanNumber('208.999')); // 0000000000
	console.log(cleanNumber('208.999.25')); // 0000000000

	// 11 Digits, first is NOT 1
	console.log(cleanNumber('7 (208).999.2571')); // 0000000000
	console.log(cleanNumber('8 (208).999.2571')); // 0000000000

	// More than 11 digits
	console.log(cleanNumber('7123 (208).999.2571')); // 0000000000
	console.log(cleanNumber('7 (208).999.25711234')); // 0000000000

const isDigit = char => /[\d]/.test(char);

function cleanNumber2(phoneNumber) {
	let cleanPhone = phoneNumber.split('').filter(isDigit).join('');
	const badNumber = '0'.repeat(10);
	const phoneLength = cleanPhone.length;

	if (phoneLength === 10) {
		return cleanPhone;
	}
	else if (phoneLength === 11 && cleanPhone[0] === '1') {
		return cleanPhone.slice(1);
	} else {
		return badNumber;
	}
}

	// Generic Cases
	console.log(cleanNumber2('208.999.2576')); // 2088992567
	console.log(cleanNumber2('219-739-3212')); // 2197393212
	console.log(cleanNumber2('(712) 321-3214')); // 7123213214

	// 11 Digits, first is 1
	console.log(cleanNumber2('1 (208).999.2571')); // 2089992571
	console.log(cleanNumber2('1 (321).999.2571')); // 3219992571

	// Less Digits
	console.log(cleanNumber2('208.999')); // 0000000000
	console.log(cleanNumber2('208.999.25')); // 0000000000

	// 11 Digits, first is NOT 1
	console.log(cleanNumber2('7 (208).999.2571')); // 0000000000
	console.log(cleanNumber2('8 (208).999.2571')); // 0000000000

	// More than 11 digits
	console.log(cleanNumber2('7123 (208).999.2571')); // 0000000000
	console.log(cleanNumber2('7 (208).999.25711234')); // 0000000000	