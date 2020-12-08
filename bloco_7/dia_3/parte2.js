const assert = require('assert');
// escreva a função addOne aqui

const addOne = (arr) => {
  let resp = [];
  for (let index = 0; index < arr.length; index += 1) {
   resp.push(1 + arr[index]);
  }
  return resp;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

// escreva a função wordLengths aqui
const wordLengths = (palavra) => {
  let wordLeng = [];
  for (let index in palavra) {
    wordLeng.push(palavra[index].length);
  }
  return wordLeng;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected2 = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output2 = wordLengths(words);
assert.deepStrictEqual(output2, expected2);

// escreva a função addAllnumbers aqui
const addAllnumbers = (num) => {
  let soma = 0;
  for (let index in num) {
    soma += num[index];
  }
  return soma;
}

const numbers = [9, 23, 10, 3, 8];
const expected3 = 53;
const output3 = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output3, expected3);

// escreva a função findTheNeedle aqui
const findTheNeedle = (arr, palavra) => {
  let pos = -1;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === palavra) {
      pos = index;
    }
  }
  return pos;
}

let words2 = ['house', 'train', 'slide', 'needle', 'book'];
let expected4 = 3;
let output4 = findTheNeedle(words2, 'needle');
assert.strictEqual(output4, expected4);

words2 = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = 0;
output4 = findTheNeedle(words2, 'plant');
assert.strictEqual(output4, expected4);

words2 = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = -1;
output4 = findTheNeedle(words2, 'plat');
assert.strictEqual(output4, expected4);