function contract(fn, ...types) {
  const argTypes = types.slice(0, -1);
  const resultType = types[types.length - 1];

  const check = (value, type) => {
    if (value === null || value === undefined) return false;
    return value.constructor === type;
  };

  return function (...args) {
    args.forEach((arg, i) => {
      const type = argTypes[i];
      if (type && !check(arg, type)) {
        throw new TypeError(
          `аргумент ${i + 1} має бути ${type.name}, а не ${typeof arg}`
        );
      }
    });

    const result = fn.apply(this, args);

    if (!check(result, resultType)) {
      throw new TypeError(
        `результат має бути ${resultType.name}, а не ${typeof result}`
      );
    }

    return result;
  };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); // Output: 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res22 = concatStrings('Hello ', 'world!');
console.dir(res22); // Output: Hello world!