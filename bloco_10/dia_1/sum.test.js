const sum = require('./sum');

describe('Testa função sum', () => {
  it('passado os valores 4 e 5 como parâmetros a função retorna 9', () => {
    expect(9).toEqual(sum(4, 5));
  });

  it('passado os valores 0 e 0 como parâmetros a função retorna 0', () => {
    expect(0).toEqual(sum(0, 0));
  });
});
