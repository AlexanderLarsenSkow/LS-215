let count = [1, 2, 3, 4, 5];

// function iterate(array) {
// 	for (let index = 0; index < array.length; index += 1) {
// 		console.log(array[index])
// 	}
// }

// iterate(count);

// This function is great! But it doesn't have a general purpose. Here's a better way:

let double = number => console.log(number * 2);

function iterate(array, callback) {
	for (let index = 0; index < array.length; index += 1) {
		callback(array[index]);
	}
}

iterate(count, function (number) { console.log(number + 1); } );
iterate(count, double)

// Odd or Even? Logs even if number is even and odd if number is odd.

// function oddOrEven(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     let number = array[i];
//     if (number % 2 === 0) {
//       console.log('even');
//     } else {
//       console.log('odd');
//     }
//   }
// }

// function oddOrEven(array) {
// 	iterate(array, function (number) {
// 		if (number % 2 === 0) {
// 			console.log('even');
// 		} else {
// 			console.log('odd');
// 		}
// 	});
// }

// oddOrEven(count);

// Using forEach

function oddOrEven(array) {
	array.forEach(function(number) {
		if (number % 2 === 0) {
			console.log('even');
		} else {
			console.log('odd');
		}
	})
}

oddOrEven(count);