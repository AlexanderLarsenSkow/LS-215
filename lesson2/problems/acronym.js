/*
Rules:
	- build an acronym from an input string
	- the acronym should be all caps
	- the acronym should have every first letter from each word in the string.
	- splitting also by -

Examples:
	acronym('Portable Network Graphics');                  // "PNG"
	acronym('First In, First Out');                        // "FIFO"
	acronym('PHP: HyperText Preprocessor');                // "PHP"
	acronym('Complementary metal-oxide semiconductor');    // "CMOS"
	acronym('Hyper-text Markup Language');                 // "HTML"

Data Structures:
	split by a regex with character class -' '

Algo:
	Split the string by - and an empty string
	Transform the array into an acronym by returning the first letter capitalized for each word.
	join the array into a string and return that.
*/

function acronym(string) {
  return string.split(/[- ]/)
								.map(word => word[0].toUpperCase())
								.join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"