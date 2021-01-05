const {uppercase, findUserById, getUserName} = require('./exercicios10-2');

test('se a callback de função uppercase, que transforma as letras de uma palavra em letras maiúsculas', () => {
  const callback = (data) => {
  expect(data).toBe('AAA');
  };
  uppercase('aaa', callback);
});

test ('se o resultado da função getUserName para o caso em que o usuário é encontrado', () => {
  expect.assertions(1)
  return getUserName(4).then((name) => {
    expect(name).toBe('Mark');
  });
});

test ('se o resultado da função getUserName para o caso em que o usuário não é encontrado', () => {
  expect.assertions(1)
  return getUserName(3).catch(error => {
    expect(error).toEqual({ error: 'User with 3 not found.' });
  });
});