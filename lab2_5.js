'use strict'

const phoneBook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'illia', phone: '+380696769420' },
  { name: 'dasha', phone: '+380676767667' },
  { name: 'ivan', phone: '+380420676967' }
];

function findPhoneByName(name) {
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name === name) {
      return phoneBook[i].phone;
    }
  }
}

console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('illia'));
console.log(findPhoneByName('dasha'));
console.log(findPhoneByName('ivan'));

const phoneBook2 = {
  'Marcus Aurelius': '+380445554433',
  'illia': '+380696969696',
  'dasha': '+380676767667',
  'nazar': '+380420696769'
};

function findPhoneByName2(name) {
  return phoneBook2[name];
}

console.log(findPhoneByName2('Marcus Aurelius'));
console.log(findPhoneByName2('illia'));
console.log(findPhoneByName2('dasha'));
console.log(findPhoneByName2('nazar'));