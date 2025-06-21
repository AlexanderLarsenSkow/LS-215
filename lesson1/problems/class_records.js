/*
	Input:
	Output:

	Rules:
		Exam Weight: 65%
		Exercise Weight: 35%
		Exam max score: 100
		Exercises max score: varied, though all exercises total to 100
		number of exercises doesn't matter, always total 100

		Grade:
			- average 4 exam scores
			- sum all exercises
			- apply weights to final scores

			93 - 100 A
			85 - 92 B
			77 - 84 C
			69 - 76 D
			60 - 68 E
			0 - 59 F

		Examples:
			[90, 80, 95, 71] exams 
			[20, 15, 40] exercises

			1. sum exams and divide by 4 => 84
			2. sum exercise scores => 75
			3. Apply Weights: 84 * .65 + 75 * .35 => 80.85
			4. Round to nearest integer => 81
			5. Look up letter grade (C)
			6. Combine percentage and letter grade "81 (C)"

		{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ], // all grades for everyone
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 }, // min is worst score, max is best score from all
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}	

Data Structures:
	Every student has 4 exams and a number of exercises that should total 100
	In the final product, all grades should be in an array : '87 (B)', for example.
	The class average of every exam should also be taken.

	Object.keys(studentScores).forEach
		student.scores.exams iterate through this

Algo
	Constants: { A: 93, B: 85, C: 77, D: 69, E: 68, F: 0 }
	EXAM_WEIGHT: .65
	EXERCISE_WEIGHT: .35
	calculate exam average, takes array, sums array, / by length of array.
	calculate exercise average, takes array of exercises, sums.

	multiply by weight in main method and add with other value.

	MAIN
		take the values and map it.
		iterate over the values of the object, going into the exams and exercises in the scores
		for each student, calculate the avererage of all their exams AND exercises

		mapping and returning the grade string for each student's exam and exercise scores.
			take an index and take the exercises for that student as well.
				multiply the average of the exams by the weight, and the sum of the exercises by weight,
					and add those together.
				
			iterate from teh beginning of the grades constant, returning the key if the score is greater
			than the current score for the letter grade.

		return an object that returns an array of all student scores
			with exam averages, which is determined the helper

		HELPER: calculateExamAvg pass in exams array
			calculating the exam averages
			Values => map based on the exams

			transposeExamScores
				[
  				[ 90, 95, 100, 80 ],
  				[ 50, 70, 90, 100 ],
  				[ 88, 87, 88, 89 ],
  				[	100, 100, 100, 100],
  				[ 50, 80, 60, 90 ]
				]
					
				=> 90, 50 88 100 50
				=> 95, 70, 87, 100, 80
				while the result is less than the size of the outer array
					start a count at 0 and add every element at that index to a current examScore
					iterate over the entrie array, then take a slice at the current index, ending at itself + 1
					and add that to an examScore array, adding that to the final result.
					increase the index.
				
			from the exams, iterate starting at 0, add each exam number from each student to an array
			take the average from this array, find the min from thsi array, and the max from this array.
			return the object.

			plus the min and the max from this array. 

	FIRST TRANSPOSE ATTEMPT
	// function transposeExams(exams) {
// 	let result = [];
// 	let index = 0;

// 	while (result.length < exams[0].length) {
// 		let transposedScores = [];

// 		exams.forEach(examScores => {
// 			transposedScores.push(examScores[index]);
// 		})

// 		index += 1;
// 		result.push(transposedScores);
// 	}

// 	return result;
// }

*/

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

"use strict";

const GRADES = { A: 93, B: 85, C: 77, D: 69, E: 60, F: 0, };
const EXAM_WEIGHT = .65;
const EXERCISE_WEIGHT = .35;

const totalScores = scores => scores.reduce((sum, score) => sum + score);

const calculateExamAverage = (examScores) => {
	let total = totalScores(examScores);
	return total / examScores.length;
};

const calculateGrade = (examAverage, exerciseTotal) => {
	return (examAverage * EXAM_WEIGHT) + (exerciseTotal * EXERCISE_WEIGHT);
};

function findLetterGrade(grade) {
	let gradesArray = Object.keys(GRADES);
	return gradesArray.find(letter => grade >= GRADES[letter]);
}

function calculateScores(exams, exercises) {
	return exams.map((studentExams, index) => {
		let examAverage = calculateExamAverage(studentExams);
		let exerciseTotal = totalScores(exercises[index]);

		let grade = Math.round(calculateGrade(examAverage, exerciseTotal));
		let letterGrade = findLetterGrade(grade);

		return `${grade} (${letterGrade})`;
	})
}

function transposeExams(exams) {
	let transposition = exams.map((examScores, index) => {
		let transposedScores = [];
		
		exams.forEach(examScores => {
			transposedScores.push(examScores[index]);
		})

		return transposedScores;
	})

	return transposition.slice(0, transposition.length - 1);
}

function calculateClassAverages(exams) {
	const transposition = transposeExams(exams);

	return transposition.map(scores => {
		let average = calculateExamAverage(scores);
		let [minimum, maximum] = [Math.min(...scores), Math.max(...scores)];

		return {
			average,
			minimum,
			maximum,
		};
	})
}

function generateClassRecordSummary(scores) {
	const students = Object.values(scores);
	const exams = students.map(student => student.scores.exams);
	const exercises = students.map(student => student.scores.exercises);

	return {
		studentGrades: calculateScores(exams, exercises),
		exams: calculateClassAverages(exams),
	};
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }