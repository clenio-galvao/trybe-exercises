const challenges = require('./challenges');

describe('Testa funções encode e decode', () => {
  it('se encode e decode são funções', () => {
    expect(typeof challenges.encode).toEqual('function');
    expect(typeof challenges.decode).toEqual('function');
  });

  it('se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente, na função encode', () => {
    expect(challenges.encode('a')).toEqual('1');
    expect(challenges.encode('e')).toEqual('2');
    expect(challenges.encode('i')).toEqual('3');
    expect(challenges.encode('o')).toEqual('4');
    expect(challenges.encode('u')).toEqual('5');
  });

  it('se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u, respectivamente, na função decode', () => {
    expect(challenges.decode('1')).toEqual('a');
    expect(challenges.decode('2')).toEqual('e');
    expect(challenges.decode('3')).toEqual('i');
    expect(challenges.decode('4')).toEqual('o');
    expect(challenges.decode('5')).toEqual('u');
  });

  it('se as demais letras/números não são convertidos para cada caso', () => {
    expect(challenges.encode('bcdfghjklmnpqrstvwzx')).not.toContain('1');
    expect(challenges.decode('6789')).not.toContain('e');
  });
});

// describe('Testa funções encode e decode', () => {
//   it('se encode e decode são funções', () => {
//     expect(typeof challenges.encode).toEqual('function');
//     expect(typeof challenges.decode).toEqual('function');
//   });
// });