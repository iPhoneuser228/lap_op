'use strict'

function range(start, end) {
  let result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}
console.log(range(15, 30));

function rangeOdd(start2, end2) {
  let result2 = [];

  for (let i = start2; i <= end2; i++) {
    if (i % 2 === 1) {
      result2.push(i);
    }
  }

  return result2;
}

console.log(rangeOdd(15, 30));