'use strict';

const compose = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('All arguments must be functions');
    }
  }

  const handlers = [];

  const composed = (x) => {
    try {
      return fns.reduceRight((acc, fn) => fn(acc), x);
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return undefined;
    }
  };

  composed.on = (name, handler) => {
    if (name === 'error') {
      handlers.push(handler);
    }
  };

  return composed;
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;
const bad = () => {
  throw new Error('помилка');
};

const f = compose(inc, twice, cube);
console.log(f(5))

const g = compose(inc, bad, cube);
g.on('error', (e) => {
  console.log('Caught:', e.message);
});
console.log(g(5));
