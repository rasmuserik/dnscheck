const dns = require('dns');
const vowels = 'eyuioa'
const consonants= 'wrtpsdfghklxcvbnmqzj'
function randomLetter(alphabet) {
  return alphabet[Math.random() * alphabet.length | 0];
}
function randomWord() {
  return  '' +
    randomLetter(consonants) + 
    randomLetter(vowels) + 
    randomLetter(consonants) + 
    randomLetter(vowels) + 
    randomLetter(consonants) +
    '';
}

for(let i = 0; i < 100000; ++i) {
  const word = randomWord();
  dns.lookup(word + '.com', (err, result) => {
    if(err && err.code === 'ENOTFOUND') {
      console.log(word + '.com');
    }
  })
}
