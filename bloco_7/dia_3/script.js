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
assert.throws(() => {
  sum(4, '5');
});
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/); 

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
const arrayNovo = myRemove([1, 2, 3, 4], 3); 
const arrayNovo2 = myRemove([1, 2, 3, 4], 5);
// implemente seus testes aqui
assert.deepStrictEqual(arrayNovo, [1, 2, 4]);   // pq tem que colocar o deep??
assert.notStrictEqual(arrayNovo, [1, 2, 3, 4], 'arrayNovo não pode ser o antigo')
// assert.deepStrictEqual(arrayNovo, [1, 2, 3, 4], 'teve mudanças no array passado como parâmetro') // passou mas precisa ficar comentada
assert.deepStrictEqual(arrayNovo2, [1, 2, 3, 4], 'o array não tem o número 5, não deveria ter erro') // pq tem que colocar o deep?


function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}
const arrayNovo3 = myRemoveWithoutCopy([1, 2, 3, 4], 3); 
const arrayNovo4 = myRemoveWithoutCopy([1, 2, 3, 4], 5);

// implemente seus testes aqui

assert.deepStrictEqual(arrayNovo3, [1, 2, 4], 'não removeu o número 3 do array?');
assert.notStrictEqual(arrayNovo3, [1, 2, 3, 4], 'arrayNovo não pode ser igual o antigo');
// assert.deepStrictEqual(arrayNovo3, [1, 2, 3, 4], 'teve mudanças no array passado como parâmetro');
assert.deepStrictEqual(arrayNovo4, [1, 2, 3, 4], 'o array não tem o número 5, não deveria ter erro');

