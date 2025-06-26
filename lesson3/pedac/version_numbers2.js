/*
I solved the problem in an hour. However, there is a better way than padding arrays.
	We can use a ternary inside the comparison function to make an undefined value 0 if it
	doesn't exist in the shorter array.
*/

function determineVersionComp(array1, array2) {
	const maxLength = Math.max(array1.length, array2.length);
	
	for (let index = 0; index < maxLength; index += 1) {
		let num1 = array1[index] ? array1[index] : 0;
		let num2 = array2[index] ? array2[index] : 0;

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
	const invalidChars = /[^\.\d]/;
	if (version1.match(invalidChars) || version2.match(invalidChars)) {
		return null;
	}

	let [array1, array2] = [version1.split('.'), version2.split('.')];
	[array1, array2] = [array1.map(Number), array2.map(Number)];

	return determineVersionComp(array1, array2)
}

// Greater Than
console.log(compareVersions('1.5', '1') === 1);
console.log(compareVersions('5.18', '5.2.15') === 1)
console.log(compareVersions('2.0', '1.0') === 1)

// Lesser Than
console.log(compareVersions('2.0', '3.0.1') === -1)
console.log(compareVersions('1.1', '1.1.12') === -1)
console.log(compareVersions('1.18.12.2.0', '1.18.12.3') === -1)

// Equal
console.log(compareVersions('1.2', '1.2.0') === 0)
console.log(compareVersions('5', '5.0.0') === 0)
console.log(compareVersions('1.18', '1.18') === 0)

// Bad Characters
console.log(compareVersions('1.2a', '1.2.0') === null)
console.log(compareVersions('5.three', '*#$sab') === null)
console.log(compareVersions('abc', 'not right') === null)
