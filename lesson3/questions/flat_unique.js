/*
input: 2-d array
output: flat array with all duplicated elements removed.

Rules:
	- Given a 2-d array, flatten it and remove duplicates.
	- treat numbers and strings loosely ('1' == 1) for example. These are duplicates here.
	- when the array is empty, return teh empty array. 

Questions:
	- Is it the same array or a new one that we return when it is empty?
	- When a number and string are compared, like '2' and 2, should we always convert it to a number?
	- What should we do if no argument is provided? Or there are more arguments?
	- Can there ever be a nested object or array inside the subarray? What should happen here?
	- Can the array ever be sparse? Or will it have object properties that we have to deal with?
	- Will arrays ever have different kinds of elements? Booleans or undefined or null
	- Will the numbers ever have special number types like Infinity, -Infinity, or NaN? How to handle?
	- Will the input ever not be an array? can it be something like null or undefined? What to do?
	- Will there always be 2 arrays in the input array, or can there be more?
	- can strings ever be longer than 1 character?
	- Should the result array be ordered in any way? Or should it be left as is?
	- Will the elements inside the array always be arrays, or will there be other elements?
	- NaN? Do I have to remove duplicate NaN?
	- Are objects / arrays identical if they have the same values? Or does it to be the same reference?
	- Can the subarrays be empty?

Examples:
flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']
*/