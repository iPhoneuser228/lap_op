'use strict'

const data = [true, 'hello', 5, 12, -200, false, false, 'word',
    NaN, 'Python', { name: 'Bob' },[4, 5, 6], false,
    undefined, 9, null, NaN, { arr: [7, 8, 9] }, 1.5, null
];

const counts = { number: 0, string: 0, boolean: 0, undefined: 0, object: 0 };

for (const item of data) {
  const type = typeof item;
  counts[type] += 1;
}

console.dir(counts);

const counts2 = {};

for (const item1 of data) {
  const type1 = typeof item1;

  if (type1 in counts2) {
    counts2[type1] += 1;
  } else {
    counts2[type1] = 1;
  }
}

console.dir(counts2);