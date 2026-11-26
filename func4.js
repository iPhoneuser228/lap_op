function difference(array1, array2) {
  return array1.filter(item => !array2.includes(item));
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
// Результат: [7, -2, 5]

const array4 = ['Beijing', 'Kiev'];
const array5 = ['Kiev', 'London', 'Baghdad'];
const result2 = difference(array4, array5);
console.log(result2);
// Результат: ['Beijing']