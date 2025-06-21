/*
For each name in the list, determine its first letter.
Count the occurrences of each first letter.
Find the first letter that occurs most often.
*/

let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];
let maxLetter = '';

let firstLetters = names.map(name => name[0]);
let letterCount = {};

firstLetters.forEach(name => {
	if (letterCount.hasOwnProperty(name)) {
		letterCount[name] += 1;
	} else {
		letterCount[name] = 1;
	}
})

console.log(letterCount);
let maxCount = Math.max(...Object.values(letterCount));

Object.keys(letterCount).forEach(letter => {
	if (letterCount[letter] === maxCount) {
		maxLetter = letter;
	}
})

console.log(maxLetter); // 'K'