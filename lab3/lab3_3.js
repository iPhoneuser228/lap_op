'use strict'

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

function fn(iface) {
  const result = [];
  const keys = Object.keys(iface);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = iface[key];

    if (typeof value === 'function') {
      result.push([key, value.length]);
    }
  }

  return result;
}

console.log(fn(iface));
