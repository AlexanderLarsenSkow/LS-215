/*
	input: bands array of objects
	output: fixed information for each band

	Rules:
		- every band should be from Canada.
		- band names should all be capitalized.
		- band names should not have dots.

	Examples:
		sunset rubdown => Sunset Rubdown country: 'Canada'
		women => Women
		a silver mt. zion => A Silver Mt Zion

	Data Structures:
		iterate through the entries.
		if the first element is the name, then set the second to the capitalized version
		replace all periods from the name.

		if the first element is the country, set it to 'Canada'

	Algo:
		convert to an array of subarrays
		if the first element in the subarr is 'name', 2 do things:
			
		HELPER	
		- capitalize every word in the name
		- split into array of words, return first letter capitalized added to slice

		HELPER
		- take the capitalized version and remove the dots with replaceAll.

		if the first element is country, set the second to 'Canada'

		return the array reconverted to an object.
*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalize(words) {
	return words.split(' ')
							.map(word => word[0].toUpperCase() + word.slice(1))
							.join(' ');
}

function removeDots(words) {
	return words.replaceAll(/[.]/g, '');
}

function processBands(data) {
	return data.map(band => {
		let processedData = {};

		Object.keys(band).forEach(key => {
			let value = band[key];

			if (key === 'name') {
				processedData[key] = removeDots(capitalize(value));
			}
			else if (key === 'country') {
				processedData[key] = 'Canada';
			} else {
				processedData[key] = value;
			}
		})

		return processedData;
	})
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]