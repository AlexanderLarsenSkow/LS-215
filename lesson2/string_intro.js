// capitalize first letter of every word
/* String Problem Steps:
		declare new string or container for result
		break down or parse string, like with split
		Apply list processing strategy
		combine back into string

*/

let text = 'The quick brown fox jumps over the lazy dog.';

function capitalize(text) {
	let words = text.split(' '); // splitting
	return words.map(word => word[0].toUpperCase() + word.slice(1)) // processing
							.join(' '); // combining after operation
}

console.log(capitalize(text));