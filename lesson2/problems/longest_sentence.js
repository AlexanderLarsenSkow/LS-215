/*
input: take a large paragraph
output: return longest sentence.

Rules:
	- sentences can end with . ! ?
	- sentences begin with a word character
	- sentence ending characters are part of the sentence... can't split.
	- word characters may be any character other than , . ! ?
	- Words are delimited by one or more spaces.

Examples:
	'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.'

	Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure.

	We are met on a great battlefield of that' +
  ' war.

	We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. 

	It is altogether fitting and' +
  ' proper that we should do this.'

	But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. 
	
	The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract.

	The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. 

	It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced.

	It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.'

	Data Structures:
		match (/^[^,][^?!.]+[.?!]$/)
		word has 1 or more spaces at all times. split(/ +/);
		
		- get string into an array somehow. split doesn't seem good because we want periods.
		- map the array by each sentence split by word and take the length. Then take the max word length.
		- Then filter the array based on the array length being equal to the max.

		- log the longest sentence AND the count of its characters.

	Algo:
		match into array of sentences
		map the array by number of words characters.
			HELPER FUNCTION:
				- takes a sentence.
				- splits sentence into array of words. one or spaces.
				- returns a length.

		Take the max of the wordLengths.
		Find the sentence who wordLength === the max word length. 

		log the longest sentence AND its word count.
*/

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced.'
	
	/*It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';*/

const SENTENCE_REGEX = /[^,?.! ][^?!.]+[.?!]/g;

function getWordCount(sentence) {
	return sentence.split(/\s+/).length;
}

function longestSentence(text) {
	const sentences = text.match(SENTENCE_REGEX);
	
	const wordCounts = sentences.map(getWordCount);
	const maxCount = Math.max(...wordCounts);

	const longestSentence = sentences.find(sentence => {
		return getWordCount(sentence) === maxCount;
	})

	console.log(longestSentence);
	console.log('');
	console.log(`The longest sentence has ${maxCount} words.`);
}

longestSentence(longText);

// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// Assuming the last sentence is removed:

// console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.