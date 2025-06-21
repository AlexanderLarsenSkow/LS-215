// Palindromic Substrings

/*
input: string
output: array of all substrings that are palindromic.

Rules:
	- case matters, so don't downcase everything.
	- palindrome: same forwards as it is backwards.
	- must be greater than 1 char

Examples:
	palindromes('abcd');       // [] , no palindromic subs
palindromes('madam');      // [ "madam", "ada" ] , 2, madam and ada

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

Data Structures:
	how to determine palindrome? convert to array, reverse it, join it, check for equality.

Algorithm:
	Filter the substrings based on whether the current substring is a palindrome.

	HELPER isPalindrome takes 1 arg string
		split into array, reverse, join, check for equality against itself.
*/

function getSubstrings(string) {
	return string.split('').reduce((substrings, char, index1) => {
		for (let index2 = index1 + 1; index2 <= string.length; index2 += 1) {
			substrings.push(string.slice(index1, index2));
		}

		return substrings;
	}, [])
}

function isPalindrome(substr) {
	return substr.length > 1 && substr.split('')
																		.reverse()
																		.join('') === substr;
}

function palindromes(string) {
	const substrings = getSubstrings(string);
	return substrings.filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
