/*
	input: array of movies
	output: filtered array of movies where only id and title are kept.

	Rules:
		Filter out all movies that don't have an id or title property
		filter out all other properties. The only properties in the resulting objects in the array
		should be: id and value, title and value

	Example:
		[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];

	Data Structures:
		use filter on the array and only take objects that have both an id and title property
			hasOwnProperty will work.
		
		Afterwards, map the array. This map will take an Object entries call, that filters out all
			subarrs that don't have either 'id' or 'title' in them.
			Return the subarray with fromENtries, which converts it back to an array.

	Algo:
		- Filter out all objects that don't have an id and title property from the array
		- Transform the array
			- inside this iteration, convert the object to an array
			- Filter out all subarrays that don't have 'id' or 'title'
			- return the subarray converted to an object.
		- return the transformation.

*/

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453, // filtered out, no title
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber', // filtered out, no id
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

/*
		- Filter out all objects that don't have an id and title property from the array
		- Transform the array
			- inside this iteration, convert the object to an array
			- Filter out all subarrays that don't have 'id' or 'title'
			- return the subarray converted to an object.
		- return the transformation.

*/

function includesProps(movieArray) {
	return movieArray.some
}

function processReleaseData(data) {
	let filteredData = data.filter(movie => movie.id && movie.title);

	return filteredData.map(movie => {
		let movieArray = Object.entries(movie);

		let filteredArr = movieArray.filter(subarr => {
			return subarr.includes('id') || subarr.includes('title');
		});

		return Object.fromEntries(filteredArr);
	})
}

console.log(processReleaseData(newReleases));

// should return:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];

/*
	for the filter, ls uses:
		.map(movie => {
			return {
				id: movie.id,
				title: movie.title,
			}
		})

		Much simpler! 
*/