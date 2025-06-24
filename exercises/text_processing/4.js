/*
input: string
output: capitalized string, where every first word is capped

examples:
	wordCap('four score and seven');       // "Four Score And Seven"
	wordCap('the javaScript language');    // "The Javascript Language"
	wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

Data Structures:
	splitting into array and mapping it to capitalize every part.
	first letter upcase + downcase for everything else.
lowercase everything first.
	\b[a-z] replaceAll \b[A-Z]

Algo:
	downcase the entire string
	replace every first char in each word with an uppercase version.
*/

function upcase(match) {
	return match.toUpperCase();
}

function wordCap(words) {
	return words.toLowerCase().replace(/\b[a-z]/g, upcase);
}

console.log(	wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'