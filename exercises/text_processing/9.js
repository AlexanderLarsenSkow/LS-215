/*
input: word and string of text
output: integer that represents a count of how many times the word is represented.

Rules:
	- all word breaks are spaces.
	- some words include punctuation, no worries.
	- casing doesn't matter.

Example:

Data Structures:
	filter and length.

Algo:
	split into an array of words. lowercased.
	filter the array by the search word and return a length.
*/

function searchWord(word, text) {
	return text.toLowerCase()
							.split(' ')
							.filter(currentWord => currentWord === word.toLowerCase())
							.length;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3

function searchWord2(word, text) {
	const regex = new RegExp(`\\b${word}\\b`, 'gi');
	console.log(regex);
	const matches = text.match(regex);

	return matches ? matches.length : 0;
}

console.log(searchWord2('sed', text));      // 3
console.log(searchWord2('qui', text)); // 4
