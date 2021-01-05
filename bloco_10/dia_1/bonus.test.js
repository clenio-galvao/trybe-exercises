const searchEmployee = require('./bonus');

describe('Testa a função searchEmployee', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Testa se searchEmployee retorna o funcionário correto sendo buscado pelo ID', () => {
    expect(searchEmployee('8579-6')).toEqual({
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    });
    expect(searchEmployee('9852-2-2')).toEqual({
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    });
  });
  it('Testa se searchEmployee retorna o funcionário correto sendo buscado pelo Detail', () => {
    expect(searchEmployee('', 'Ana')).toEqual({
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    });
    expect(searchEmployee('', 'Gates')).toEqual({
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    });
    expect(searchEmployee('', 'Design')).toEqual([{
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    }]);
    expect(searchEmployee('', 'Context API')).toEqual([{
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    }]);
  });

  it('Testa se searchEmployee retorna mensagens de erro', () => {
    expect(searchEmployee('1234')).toBe('ID não identificada');
    expect(searchEmployee('', 'jorge')).toBe('Informação indisponível');
  });
});

// Considere os dados abaixo. Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele ( firstName , lastName , specialities ). 

// Você também deverá criar os testes para essa função. 

// Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário 

// e a informação consultada. 

// Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada".

// Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" .