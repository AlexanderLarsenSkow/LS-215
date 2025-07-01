/*
input: year 
output: number representing the number of Friday 13th's in a year.

Rules:
	- Given a year number, return the number of Friday the 13ths in that year.
	- Use Date object to create a new date starting on January 1 of that year.
	- Add to the days and add 1 to the count whenever we reach a 

Examples:

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

Data Structures:
	['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

MONTHS:
{
	January: 31, February: 28, March: 31, April: 30, May: 31, June: 30,
	July: 31, August: 31, September: 30, October: 31, November: 30, December: 31
}

	getDay method, getDate method. If getDate === 13, if getDay === 'Friday'
	add 1 to the setDate

Algo:
	1. Create a constant of days that includes Friday. Create a constant for the months and their max
		days.
	2. In the main function, create a date object from the year number. The year should be placed
		as a string inside as an argument for the constructor. Include a day and month: '01, 01'
	3. While the date object's year is the same HELPER
	4. Increment the date up by 1.
	5. HELPER if it reaches its max date, set the month by + 1.
		- maxDate function, pass in current date and month.
		- Find the current month in the keys.
		- return true if the current date equals the maxDate.
	6. Last, if the day equals 5 ('Friday') and the date is 13, increment the Friday13Count.
		HELPER:
			- getDay(day of week number) used as index in days array.
	7. Return Friday13Count.
*/

const FRIDAY_NUMBER = 5;

function fridayThe13ths(year) {
	let friday13Count = 0;

	for (let month = 0; month < 12; month += 1) {
		let date = new Date(`${month}-13-${year}`);
		
		if (date.getDay() === FRIDAY_NUMBER) {
			friday13Count += 1;
		}
	}

	return friday13Count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
