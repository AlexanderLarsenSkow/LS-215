/*
	input: email string
	output: true or false

	Rules:
		- return true if email is valid, false if invalid
		- 2 parts for emails:
		- local: inbox / username
		- domain: gmail.com, yahoo.com, etc.
			end in .com / .ph

		- There must be an @ sign
		- it must contain 1 or more letters and / or digits (optional but allowed)
		- domain has 2 components, domain name and com / ph, separated by .

		(.[a-z])+$

	Examples:
	isValidEmail('Foo@baz.com.ph');          // returns true // letters .com . ph, pattern can repeat.
	isValidEmail('Foo@mx.baz.com.ph');       // returns true // 3
	isValidEmail('foo@baz.com');             // returns true // only 1 
	isValidEmail('foo@baz.ph');              // returns true // only 1
	isValidEmail('foo@baz@bar.ph');          // returns false
	isValidEmail('HELLO123@baz');            // returns false // no . com
	isValidEmail('foo.bar@baz.to');          // returns false // has a period at the start, nope
	isValidEmail('foo@baz.');                // returns false , no letters, breaks pattern
	isValidEmail('foo_bat@baz');             // returns false , _ not allowed, also has no .com
	isValidEmail('foo@bar.a12');             // returns false , numbers in domain, no numbers allowed
	isValidEmail('foo_bar@baz.com');         // returns false , underscore in username
	isValidEmail('foo@bar.....com');         // returns false , too many dots

Data Structures:
	Regex
		username: ^[a-z\d]+
		@
		domain: [a-z]+(.a-z)+$


Algo:
	return test call on the regex above.
	*/

function isValidEmail(emailCandidate) {
	let emailChecker = /^([a-z\d]+@)[a-z]+(\.[a-z]+)+$/i;
	return emailChecker.test(emailCandidate);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));          // returns true
console.log(isValidEmail('foo@baz.ph'));          // returns true
console.log(isValidEmail('foo@baz@bar.ph'));          // returns false , has two 2 @
console.log(isValidEmail('HELLO123@baz'));          // returns false , 
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));          // returns false
console.log(isValidEmail('foo_bat@baz'));          // returns false
console.log(isValidEmail('foo@bar.a12'));          // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false