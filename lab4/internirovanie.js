function sum1(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

function sum2(...args) {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
}

function sum3(...args) {
  let result = 0;
  let i = 0;
  while (i < args.length) {
    result += args[i];
    i++;
  }
  return result;
}

function sum4(...args) {
  let result = 0;
  let i = 0;
  if (args.length === 0) return result;
  do {
    result += args[i];
    i++;
  } while (i < args.length);
  return result;
}

function sum5(...args) {
  return args.reduce((acc, num) => acc + num, 0);
}

const a = sum1(6, 7);
const b = sum2(0);
const c = sum3(4, 2, 0);
const d = sum4(67, 420);
const e = sum5(67, -67, -34,);
console.log(a, b, c, d, e);
