let name = prompt('What is your name?');

if (name.endsWith('!')) {
	name = name.toUpperCase().slice(0, -1);
	console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
	console.log(`Hello ${name}.`);
}