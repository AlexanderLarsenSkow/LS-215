/*
input: 2 numbers representing version numbers
output: integer representing whether version1 is greater, equal to, or less than version 2

Rules:
	- if version1 is > version2, return 1
	- if version1 < version2, return -1
	- if version1 === version2, return 0
	- if either version contains characters other than digits and period, return null.
	- When dealing with differing lengths, add 0's to the shorter string.

	- VERSION EQUALITY DETAILS:
		- 0.1 < 1 => 0 < 1
		- 1 === 1.0 => 0 === 0
		- 1.1 < 1.2 => 1 < 2
		- 1.2 === 1.2.0.0 => 2 === 2
		- 1.2 < 1.18.2 => 2 < 18

	- if the number at the current decimal is less than, it is lesser. If it is equal, it is equal at
		this place. If it is greater, it is greater. => 2 > 1. 2 === 2. 1 < 2.
	

	Edge Case	
	- If the number doesn't have a decimal point but another has a decimal point with the same leading
		number, they are equal => 1.0 === 1, 5.0 === 5, 1.2.0.0 => 1.2.0, 1.2.0.0 === 1.2
		return 0.

	Edge Case:
		- containing anything other than periods or digits, return null.
		version1: abc1.0, => null
		version2: 2.5.3_ => null
		version1: * => null

	- It doesn't matter if one number is longer than the next.
		It only matters if the number at the current . is greater than the other.
		5.18 > 5.2.5.10 ==> 18 > 2

Questions:
	- Can this be represented as a string?
	- What should we do with an empty input?


	0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

Examples:

// Greater Than
console.log(compareVersions('1.5', '1') === 1)
console.log(compareVersions('5.18', '5.2.15') === 1)
console.log(compareVersions('2.0', '1.0') === 1)

// Lesser Than
console.log(compareVersions('2.0', '3.0.1') === -1)
console.log(compareVersions('1.1', '1.1.12') === -1)
console.log(compareVersions('1.18.12.2.0', '1.18.12.3') === -1)

//Equal
console.log(compareVersions('1.2', '1.2.0') === 0)
console.log(compareVersions('5', '5.0.0') === 0)
console.log(compareVersions('1.18', '1.18') === 0)

// Bad Characters
console.log(compareVersions('1.2a', '1.2.0') === null)
console.log(compareVersions('5.three', '*#$sab') === null)
console.log(compareVersions('abc', 'not right') === null)

Data Structures:
	['1', '18', '2', '0'] => [1, 18, 2, 0] check indices in the other array
	['1', '18', '12', '3'] => [1, 18, 12, 3]

	Differing lengths creates an issue where you can't compare

	['1', '2'] comparing with ['1', '2', '0']
	[1, 2] comparing with [1, 2, 0]

	[1, 2, 0] === [1, 2, 0] if same length, start that iteration. If not same length, mutate that array.

	object for short and long array {short: [5, 18], long: [5, 18, 2]}

Algorithm:
	High Level:
		1. if the string includes non-digits other than a period, return null outright.
		2. Convert the string version numbers to arrays split by their periods.
		3. If the lengths of the arrays are not equal, add 0's to the shorter array until they are.
			- HELPER: add zeroes to the array

		4. When the lengths are equal, now iterate through and compare the values in each array to each
			other at their same positions.
		5. If we finish the iteration, return 0 outright.
			-HELPER

	Details:
		1. if the string matches a regex that doesn't have . or \d, then return null.
		2. (split) from period map by number
		3. '1.2', '1.2.0' => ['1', '2'] 1 vs ['1', '2', '0'] 2
			- put lengths into an array, find the min, then return the array whose length equals that min.
			- if the length of array1 is less than array2, add zeroes to array1.
			- if the length of array2 is less than array1, then add zeroes to array1.
		3a.
			- add zeroes until they are equal. While or for loop, add zeroes to the minimum value. '0'
			
		4. for loop, iterate through and check the value at each index against the other value
			- each value should be converted to a number.
			- If the current value in version1 is greater than the current v2, return 1.
			- If the current value in version1 is less than the current in v2, return -1.
			- If iteration finishes, return 0.
		
	Keep track of the arrays.
	But also keep track of the lengths.
*/

function addZeroes(array, controlArray) {
	while (array.length < controlArray.length) {
		array[array.length] = 0;
	}
}

function mutateShorterArray(array1, array2) {
	if (array1.length < array2.length) {
		addZeroes(array1, array2);
	}
	else if (array1.length > array2.length) {
		addZeroes(array2, array1);
	}
}

function determineVersionComp(array1, array2) {
	for (let index = 0; index < array1.length; index += 1) {
		let num1 = array1[index];
		let num2 = array2[index];

		if (num1 > num2) {
			return 1;
		}
		else if (num2 > num1) {
			return -1;
		}
	}

	return 0;
}

function compareVersions(version1, version2) {
	const invalidChars = /( *|[^\.\d])/g;
	if (version1.match(invalidChars) || version2.match(invalidChars)) {
		return null;
	}

	let [array1, array2] = [version1.split('.'), version2.split('.')];
	[array1, array2] = [array1.map(Number), array2.map(Number)];

	mutateShorterArray(array1, array2);

	return determineVersionComp(array1, array2)
}

// Greater Than
console.log(compareVersions('1.5', '1') === 1)
console.log(compareVersions('5.18', '5.2.15') === 1)
console.log(compareVersions('2.0', '1.0') === 1)

// Lesser Than
console.log(compareVersions('2.0', '3.0.1') === -1)
console.log(compareVersions('1.1', '1.1.12') === -1)
console.log(compareVersions('1.18.12.2.0', '1.18.12.3') === -1)

 //Equal
console.log(compareVersions('1.2', '1.2.0') === 0)
console.log(compareVersions('5', '5.0.0') === 0)
console.log(compareVersions('1.18', '1.18') === 0)

// Bad Characters
console.log(compareVersions('1.2a', '1.2.0') === null)
console.log(compareVersions('5.three', '*#$sab') === null)
console.log(compareVersions('abc', 'not right') === null)
console.log(compareVersions('', '') === null);
