/*
Rules:
	- match <h1> header tags
	- also match content between opening and closing tags.
	- if multiple header tags on same line, should only match headers and text inside.
	- no nested tags
*/

let regex = /<h1>.*?<\/h1>/g

console.log('<h1>Main Heading</h1>'.match(regex));
console.log('<h1>Another Main Heading</h1>'.match(regex));
console.log('<h1>ABC</h1> <p>Paragraph</p> <h1>DEF</h1><p>Done</p>'.match(regex));
