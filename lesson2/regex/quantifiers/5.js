// allow leading or trailing whitespace

let regex = /^\s*https?:\/\/\S+\s*$/ig;

console.log('https://launchschool.com/'.match(regex)); // matched
console.log('http://mail.google.com/mail/u/0/#inbox'.match(regex)); // matched
console.log('htpps://example.com'.match(regex)); // null
console.log('Go to http://launchschool.com/'.match(regex)); // null
console.log('https://user.example.com/a.cgi?a=p&c=0 hello'.match(regex)); // null
console.log('    https://launchschool.com/'.match(regex)); // matched
