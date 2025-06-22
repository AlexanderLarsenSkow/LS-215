function isUrl(urlCandidate) {
	return /^https?:\/\/\S*$/.test(urlCandidate);
}

console.log(	isUrl('https://launchschool.com'));   // -> true
console.log(isUrl('http://example.com'));   // -> true
console.log(isUrl('https://example.com hello'));  // -> false
console.log(isUrl('   https://example.com')); // -> false