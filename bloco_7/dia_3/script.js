const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

sum (4, 5);

// implemente seus testes aqui

assert.strictEqual(sum(4, 5), 9, "resultado esperado 9"); 
assert.strictEqual(sum(0, 0), 0, "resultado esperado 0"); 
assert.strictEqual(sum(4, 5), 9, "resultado esperado 9"); 

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// console.log(myRemove([1, 2, 3, 4], 3))
// implemente seus testes aqui
assert.equal(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'remover o número 3 do array');   
