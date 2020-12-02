
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const newArray = arrays.reduce((acc, element) => {
    return acc.concat(element);
  }, []);
  return newArray;
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);