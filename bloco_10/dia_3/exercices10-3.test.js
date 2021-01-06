// 1- Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

let functions = require('./exercices10-3');

jest.mock('./exercices10-3');

afterEach(functions.randomNumber.mockReset);

test('resolve exercício 1', () => {
  functions.randomNumber.mockReturnValue(10);

  expect(functions.randomNumber).toHaveBeenCalledTimes(0);
  functions.randomNumber();
  expect(functions.randomNumber).toHaveBeenCalled();
  expect(functions.randomNumber).toHaveBeenCalledTimes(1);
  expect(functions.randomNumber()).toBe(10);
  expect(functions.randomNumber).toHaveBeenCalledTimes(2);
});

// 2- Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

test('resolve exercício 2', () => {
  functions.randomNumber.mockImplementationOnce((a, b) => a / b)
    .mockReturnValue(10);

  expect(functions.randomNumber).toHaveBeenCalledTimes(0);
  expect(functions.randomNumber(4, 2)).toBe(2);
  expect(functions.randomNumber).toHaveBeenCalled();
  expect(functions.randomNumber).toHaveBeenCalledTimes(1);

  expect(functions.randomNumber()).toBe(10);
  expect(functions.randomNumber).toHaveBeenCalledTimes(2);
});

// 3- Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

test('resolve exercício 3', () => {
  functions.randomNumber.mockImplementation((a, b, c) => a * b * c);

  expect(functions.randomNumber).toHaveBeenCalledTimes(0);
  expect(functions.randomNumber(1, 2, 3)).toBe(6);
  expect(functions.randomNumber).toHaveBeenCalled();
  expect(functions.randomNumber).toHaveBeenCalledTimes(1);
  expect(functions.randomNumber(2, 2, 3)).toBe(12);
  expect(functions.randomNumber).toHaveBeenCalled();
  expect(functions.randomNumber).toHaveBeenCalledTimes(2);

  functions.randomNumber.mockReset()
    .mockImplementation(a => a * a);

  expect(functions.randomNumber(2)).toBe(4);
  expect(functions.randomNumber).toHaveBeenCalled();
  expect(functions.randomNumber).toHaveBeenCalledTimes(1);
});

// 4- Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

test('resolve exercício 4', () => {
  functions.stringUp.mockImplementationOnce(str => str.toLowerCase());
  functions.stringFrst.mockImplementationOnce((str) => {
    const len = str.length;
    return str[len - 1];
  });
  functions.stringConcat.mockImplementationOnce((str1, str2, str3) => str1.concat(str2, str3));

  expect(functions.stringUp).toHaveBeenCalledTimes(0);
  expect(functions.stringUp('AAAA')).toBe('aaaa');
  expect(functions.stringUp).toHaveBeenCalled();
  expect(functions.stringUp).toHaveBeenCalledTimes(1);

  expect(functions.stringFrst).toHaveBeenCalledTimes(0);
  expect(functions.stringFrst('cabeça')).toBe('a');
  expect(functions.stringFrst).toHaveBeenCalled();
  expect(functions.stringFrst).toHaveBeenCalledTimes(1);

  expect(functions.stringConcat).toHaveBeenCalledTimes(0);
  expect(functions.stringConcat('cabeça ', 'olho ', 'orelha')).toBe('cabeça olho orelha');
  expect(functions.stringConcat).toHaveBeenCalled();
  expect(functions.stringConcat).toHaveBeenCalledTimes(1);
});
