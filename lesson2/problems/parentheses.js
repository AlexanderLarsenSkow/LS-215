/*
	input: string
	output: true or false

	Rules:
		- Return true if the parentheses in the string are properly matched
		- Return false if they are not matched.
		- () match, ) ( not matched.

	) return false if - 1				)(   )(   )( 

	Examples:
	isBalanced('What (is) this?');        // true // + 1 + 1 , 2 - 1, - 1 === 0
	isBalanced('What is) this?');         // false , + 1 - 1 + 1 => 1, nope.
	isBalanced('What (is this?');         // false , + 1 + 1 - 1 => 1, nope
	isBalanced('((What) (is this))?');    // true , + 1 + 1 - 1 + 1 -1 -1 => 0
	isBalanced('((What)) (is this))?');   // false , 
	isBalanced('Hey!');                   // no parentheses, return true
	isBalanced(')Hey!(');                 // false , return false if - 1 
	isBalanced('What ((is))) up(');       // false , + 1 + 1 - 1 -1 -1 + 1 === 0

	Data Structures:
		if it ever goes to - 1, that means that we are mismatched. Return false.
		if it equals 0 at the end, the parentheses are balanced, otherwise, return true.
		if not 0, false

	Algo:
		- take a parenthese count variable to 0
		- iterate through the string mechanically
		- if the current character is (, + 1 to the variable
		- if the current character is ), - 1 to the variable

		- if the variable is EVER -1 , auto return false

		-if, after iteration, the variable is 0, return true. Else, false.
	*/

	function isBalanced(string) {
		let parentheseCount = 0;

		for (let char of string) {
			if (parentheseCount < 0) return false;

			if (char === '(') {
				parentheseCount += 1;
			}
			else if (char === ')') {
				parentheseCount -= 1;
			}
		}

		return parentheseCount === 0;
	}

// console.log(isBalanced('What (is) this?'));      // true
// console.log(isBalanced('What is) this?'));     // false
// console.log(isBalanced('What (is this?'));     // false
// console.log(isBalanced('((What) (is this))?'));    // true
// console.log(isBalanced('((What)) (is this))?'));   // false
// console.log(isBalanced('Hey!'));     // true
// console.log(isBalanced(')Hey!('));     // false
// console.log(isBalanced('What ((is))) up('));     // false

function isBalanced2(string) {
	let parensCount = 0;
	let negativeCount = false;
	
	string.split('').forEach(char => {
		if (parensCount < 0) {
			negativeCount = true;
		}

		if (char === '(') {
			parensCount += 1;
		}
		else if (char === ')') {
			parensCount -= 1;
		}
	})

	return negativeCount ? false : parensCount === 0;
}

console.log(isBalanced2('What (is) this?'));      // true
console.log(isBalanced2('What is) this?'));     // false
console.log(isBalanced2('What (is this?'));     // false
console.log(isBalanced2('((What) (is this))?'));    // true
console.log(isBalanced2('((What)) (is this))?'));   // false
console.log(isBalanced2('Hey!'));     // true
console.log(isBalanced2(')Hey!('));     // false
console.log(isBalanced2('What ((is))) up('));     // false
console.log(isBalanced2(')(')); // false