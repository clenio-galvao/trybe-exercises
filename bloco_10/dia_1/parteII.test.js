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

  it('se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const parameter = 'bcdfghjklmnpqrstvwzx';
    expect(challenges.encode(parameter).length).toEqual(parameter.length);
    expect(challenges.decode(parameter).length).toEqual(parameter.length);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(challenges.techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof challenges.techList).toBe('function');
  })
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(challenges.techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(challenges.techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(challenges.hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof challenges.hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(challenges.hydrate('1 cerveja')).toBe('1 copo de água');
    expect(challenges.hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(challenges.hydrate('20 shots de tequila, 2 cervejas e 1 corote')).toBe('23 copos de água');
    expect(challenges.hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(challenges.hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
