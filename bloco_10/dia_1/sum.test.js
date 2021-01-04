const sum = require('./sum');

describe('Testa função sum', () => {
  it('se passado os valores 4 e 5 como parâmetros a função retorna 9', () => {
    expect(9).toEqual(sum(4, 5));
  });

  it('se passado os valores 0 e 0 como parâmetros a função retorna 0', () => {
    expect(0).toEqual(sum(0, 0));
  });

  it('se lança um erro quando os parametros são 4 e "5" (string 5)', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it('se a mensagem de erro é "parameters must be numbers" quando os parametros são 4 e "5" (string 5)', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError('parameters must be numbers');
  });
});
