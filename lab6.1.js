'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('All arguments must be functions');
    }
  }
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5));

const f2 = pipe(inc, inc);
console.log(f2(7));

const f = pipe(inc, 7, cube); // тут зразу вилетить помилка
console.log(f(5)); // сюди виконання не дійде