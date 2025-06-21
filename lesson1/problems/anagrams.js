/*
input: 1 string, 1 array of strings
output: array of strings that are anagrams with first word

Rules:
	- Anagram: Rearrange the letters and they are the same word. same number characters and everything
	- filter out all non-anagrams.

Examples:
	- anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ] => inlets is ana
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ] 2 

Data Structures:
	- call filter with is Anagram function that takes 2 args

Algo
	HELPER isAnagram
		- split the 2 strings into arrays
		- sort the arrays, no callback needed.
		- join the arrays. If equal, they are anagrams.

	MAIN
		filter based on isAnagram function
		return that
*/

function isAnagram(word1, word2) {
	let [arr1, arr2] = [word1.split(''), word2.split('')];
	return arr1.sort().join() === arr2.sort().join();
}

function anagram(word, list) {
	return list.filter(currentWord => isAnagram(word, currentWord));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]