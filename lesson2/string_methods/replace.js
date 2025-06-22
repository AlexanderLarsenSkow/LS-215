/*
	2 arguments:
		pattern or substring to replace, and the pattern or substring it will replace with.
	
	Returns new string
*/

// this version only replaces the first instance of the replaced char / substring

let state = 'Mississippi';

console.log(state.replace('s', 'q')); // Miqsissippi

// Use a regEx to replace every instance.

console.log(state.replace(/s/g, 'q')); // Miqqiqqippi

// Also can use replaceAll, does not require regEx g tag

console.log(state.replaceAll('s', 'q')); // Miqqiqqippi
