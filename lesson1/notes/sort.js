// Sort, mutating

function compareScores(score1, score2) {
	if (score1 < score2) {
		return -1;
	}
	else if (score1 > score2) {
		return 1;
	} else {
		return 0;
	}
}

let scores = [5, 88, 50, 9, 60, 99, 12, 23];
console.log(scores.sort(compareScores));            // [ 5, 9, 12, 23, 50, 60, 88, 99 ]
console.log(scores);                                // mutated to [ 5, 9, 12, 23, 50, 60, 88, 99 ]

// Default sorting, with no callback, is string Unicode code points. Useless for numbers.

/* Sort takes one argument, a callback function, that has 2 parameters:
	- item1 and item2, which is used for sorting.

	if item1 and item2 together return a negative value (-1), then item1 goes first.
	if item1 and 2 return a positive value (1), item2 will go first.
	0 occurs when the sequence doesn't matter.

	Return:
		mutates original array and returns reference to that array.
*/

let studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 },
];

function compareGrades(student1, student2) {
  if (student1.grade < student2.grade) {
    return 1;
  } else if (student1.grade > student2.grade) {
    return -1;
  } else {
    return 0;
  }
}

console.log(studentGrades.sort(compareGrades));
console.log(studentGrades.sort((student1, student2) => student2.grade - student1.grade));