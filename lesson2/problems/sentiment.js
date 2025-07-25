/*
	input: large text string
	output:

		logging output:
			number of positive words
			positive words listed

			number of negative words
			negative words listed

		The sentiment, positive, neutral, or negative

	Rules:
		- positve - neg > 0 => positive
		- positive - neg == 0 => neutral
		- positive - neg < 0 => negative

	Examples:
		die occurs twice.

	Data Structures:
		- regex out the newlines.
		- split into an array of words. Then we will take a count of positive words / negative words.
		- take all the positive words that occur and negative words

	Algo:
		split the array by word, it should 1 or more of \n,' '-:'\ 
		take an array of words that are inlcuded hte positive words
		take an array of words fthat are included in the negative words
		get the length of the pos words
		get the length of neg words

		if pos words > neg words, sentiment is positive
		if pos words == neg words, sentimenti is neutral
		if pos word < neg words, sentiment is negative

		log output
*/

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function determineSentiment(posCount, negCount) {
	if (posCount > negCount) {
		return 'positive';
	}
	else if (posCount < negCount) {
		return 'negative';
	} else {
		return 'neutral';
	}
}

function displaySentiment(happyWords, sadWords, posCount, negCount, result) {
	console.log(`There are ${posCount} positive words in the text.`);
	console.log(`Positive Sentiments: ${happyWords.join(', ')}`);
	console.log(`There are ${negCount} negative words in the text.`);
	console.log(`Negative Sentiments: ${sadWords.join(', ')}`);
	console.log(`The sentiment of the text is ${result}`);
}

function sentiment(text) {
	let words = text.split(/[\n\-,\.:' ]+/);

	const happyWords = words.filter(word => positiveWords.includes(word));
	const sadWords = words.filter(word => negativeWords.includes(word));

	const posCount = happyWords.length;
	const negCount = sadWords.length;

	const result = determineSentiment(posCount, negCount);

	displaySentiment(happyWords, sadWords, posCount, negCount, result);
}

sentiment(textExcerpt);

// console output

// There are 5 positive words in the text.
// Positive sentiments: fortune, dream, respect, love, resolution

// There are 6 negative words in the text.
// Negative sentiments: die, heartache, die, death, weary, death

// The sentiment of the text is Negative.
