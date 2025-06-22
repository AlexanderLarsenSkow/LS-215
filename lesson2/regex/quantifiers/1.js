let regex = /\bb[a-z]*e\b/g;

console.log('To be or not to be'.match(regex)); // 'be', 'be
console.log('Be a busy bee'.match(regex)); // 'bee'
console.log('I brake for animals.'.match(regex)); // 'brake'
