/*
Write a function that displays an 8-pointed star in an nxn grid, 
where n is an odd integer that is supplied as an argument to the function. 
The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

input: odd integer n
output: output of a star.

Rules:
	- Integer will always be odd integer
	- Have to log some stars based on that, undefined return value
	- Smallest star you have to handle is 7 star.
	- middle row is always the size of the input number. * x 7
	- second row is always 3 stars in the middle, with max spaces on both sides.
	- As we go wider, start adding spaces between stars, 1 at a time.
		- 2nd row:  * * *
		- 1st row:   ***
	- Every row only has 3 stars but the spaces get wider.
	- Calculate spaces:
		- every row is always input n spaces long.
		- first row has 0spaces, 1star, 2spaces, 1star, 2spaces, 1star, 0spaces
		- First row: n - 3. divide by 2 to get the middle spaces, start increasing outerSpace
			by 1 each time and decrementing innerspace.
		- The higher the input number, the more rows there. Always number / 2 -1
	
Questions:
	- What happens when integer is 1?
	- What happens if integer is 0?
	- will it ever be even?
	- Will it ever be NaN? Infinity? -Infinity?
	- Is there an upper limit to the problem?
	- 

Examples:

star(7);
// logs
*  *  * 3 
 * * * 2 
  *** 1 
******* 
  *** 1 
 * * * 2 
*  *  * 3

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

star(11);
// logs
   *    *    *
		*   *   *
		 *  *  *
		  * * *
		   ***
	 ***********
		   ***
		  * * *
		 *  *  *
		*   *   *
   *    *    *

Data Structures:
	array is useful here for reverse / toReverse()
	manually calculate values and push rows into an array.

	for loop that starts at 

	n - 3 / 2 => gets innerSpaces.
	outerSpaces always start at 0. Increment up to eventually be where outerSpaces were
	innerSpaces should decrement down to 0.

	while outerSpaces are greater or equal to 0. 

	push row into starRows

	for the lower side, we can reverse that value.

Algo:
	star and space constants

	1. HELPER upperStar, takes integer n and calculates upper half of star.
		a. Create a variable innerSpaces that is set to the input - 3 / 2.
		b. Set a variable outerSpaces equal to 0.
		c. create a for loop and iterate from innerSpaces and go until it is less than 0.
		d. Create a row that is the outerSpace repeated n times, star1, innerspace, star2,
			innerspace, star3
		e. Push the row into the starRow array.
		f. Return the array.
	2. HELPER lowerStar
		a. Call the upperStar function and return the array reversed.
	3. Main Function:
		a. call upperStar
		b. call lowerStar
		c. Create a middle that is input n stars long.
		log all 3 values, join each array by a \n character so it is a string.
		
*/

const STAR = '*';
const SPACE = ' ';

function upperStar(n) {
	let innerCount = (n - 3) / 2;
	let outerCount = 0;
	let starRows = [];

	while (innerCount >= 0) {
		let outer = SPACE.repeat(outerCount);
		let inner = SPACE.repeat(innerCount);

		let row = `${outer}${STAR}${inner}${STAR}${inner}${STAR}`;
		starRows.push(row);

		outerCount += 1;
		innerCount -= 1;
	}

	return starRows;
}

function lowerStar(n) {
	return upperStar(n).reverse();
}

function star(n) {
	let [upper, lower] = [upperStar(n), lowerStar(n)];
	let middle = STAR.repeat(n);

	console.log(upper.join('\n'));
	console.log(middle);
	console.log(lower.join('\n'));
}

// star(7);
// logs
// *  *  * 3 
//  * * * 2 
//   *** 1 
// ******* 
//   *** 1 
//  * * * 2 
// *  *  * 3

// star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(11);
// logs
  //  *    *    *
	// 	*   *   *
	// 	 *  *  *
	// 	  * * *
	// 	   ***
	//  ***********
	// 	   ***
	// 	  * * *
	// 	 *  *  *
	// 	*   *   *
  //  *    *    *