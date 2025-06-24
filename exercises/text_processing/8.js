/*
	input: string
	output: array 

	Rules:
		array should contain every word from string
		every word should be listed as well as a space and string

	Examples:
		wordLengths('cow sheep chicken');
			// ["cow 3", "sheep 5", "chicken 7"] splitting by space

			wordLengths('baseball hot dogs and apple pie'); splitting by space
			// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

			wordLengths("It ain't easy, is it?"); splitting by space
			// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

			wordLengths('Supercalifragilisticexpialidocious');
			// ["Supercalifragilisticexpialidocious 34"]

			wordLengths('');      // []
			wordLengths();        // []

	Data Structures:
		split the string into an array of words. and map it.
			return each word + a space nad its own length.
*/

function wordLengths(string) {
	if (!string) return [];
	return string.split(' ').map(word => `${word} ${word.length}`);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []