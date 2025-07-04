const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  // RESERVED_KEYWORDS.forEach(reserved => {
  //   if (name === reserved) {
  //     return true;
  //   }
  // });

	for (let keyword of RESERVED_KEYWORDS) {
		if (name === keyword) {
      return true;
    }
	}

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

function isReserved2(name) {
	return RESERVED_KEYWORDS.includes(name);
}

console.log(isReserved2('monkey')); // false
console.log(isReserved2('patch'));  // false
console.log(isReserved2('switch')); // should be: true
