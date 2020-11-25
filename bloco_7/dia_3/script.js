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
const arrayNovo = myRemove([1, 2, 3, 4], 3); 
const arrayNovo2 = myRemove([1, 2, 3, 4], 5);
// implemente seus testes aqui
// assert.strictEqual(arrayNovo, [1, 2, 4], 'remover o número 3 do array');   // erro, deveria ocorrer o contrário
assert.notStrictEqual(arrayNovo, [1, 2, 3, 4], 'arrayNovo não pode ser o antigo')
// assert.deepStrictEqual(arrayNovo, [1, 2, 3, 4], 'teve mudanças no array passado como parâmetro')
// assert.strictEqual(arrayNovo2, [1, 2, 3, 4], 'o array não tem o número 5, não deveria ter erro') // erro, deveria ocorrer o contrário



