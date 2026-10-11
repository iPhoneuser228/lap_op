'use strict'

function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(0, 67));
console.log(random(69));

function generateKey(length, characters) {
  let key = '';

  for (let i = 0; i < length; i++) {
    let index = random(characters.length - 1);
    key += characters[index];
  }

  return key;
}

const characters = 'qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()-=';
const key = generateKey(67, characters);
console.log(key);