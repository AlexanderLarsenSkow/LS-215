function range(start, end) {
	if (!end) {
		[start, end] = [0, start];
	}

  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 0));
console.log(range(5));