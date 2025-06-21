function substrings(string) {
	return string.split('').reduce((substrings, char, index1) => {
		for (let index2 = index1 + 1; index2 <= string.length; index2 += 1) {
			substrings.push(string.slice(index1, index2));
		}

		return substrings;
	}, [])
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]