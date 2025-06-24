/*
input: string
output: object with 3 props:

Rules:
	object should have lowercase prop: count
	uppercase prop: count
	neither: count of neither.

Examples:
	letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
	letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
	letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
	letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

Data Structures:
	Regex: match ^[a-z]+$ .length
		match ^[A-Z]$ length
		match ^[^a-z]$ i

	Algo:
		Create an object literal where every prop is 0.
		iterate over with for Each
		if the letter is lower, add to the count.
		if upper, add to the count of upper.
		else, add to 1 to neither.
		return object.
*/

function letterCaseCount(string) {
	let caseCounter = {
		lowercase: 0,
		uppercase: 0,
		neither: 0,
	};

	string.split('').forEach(char => {
		if (/[a-z]/.test(char)) {
			caseCounter.lowercase += 1;
		}
		else if (/[A-Z]/.test(char)) {
			caseCounter.uppercase += 1;
		} else {
			caseCounter.neither += 1;
		}
	})

	return caseCounter;
}

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCount2(string) {
	let uppercase = string.match(/[A-Z]/g);
	let lowercase = string.match(/[a-z]/g);
	let neither = string.match(/[^a-z]/ig);

	return {
		lowercase: lowercase ? lowercase.length : 0,
		uppercase: uppercase ? uppercase.length : 0,
		neither: neither ? neither.length : 0,
	};
}

console.log(letterCaseCount2('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount2('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount2('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount2(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
