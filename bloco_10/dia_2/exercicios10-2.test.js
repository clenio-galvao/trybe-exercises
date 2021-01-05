const {uppercase, getUserName, getRepos, getAnimal} = require('./exercicios10-2');

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

test ('se o resultado da função getUserName para o caso em que o usuário é encontrado usando async/await', async () => {
  const name = await getUserName(4);
  expect(name).toBe('Mark');
});

test ('se o resultado da função getUserName para o caso em que o usuário não é encontrado usando async/await', async () => {
  try {
    await getUserName(3);
  } catch (error) {
    expect(error).toEqual({ error: 'User with 3 not found.' });
  }
});

test('Dada a URL https://api.github.com/users/tryber/repos, verifique que os repositórios challenge-bug-hunting-youtrybe-squad-3 e iss-location se encontram nessa lista.', async () => {
  const RepoNames = await getRepos('https://api.github.com/users/tryber/repos');
  expect.assertions(2);
  expect(RepoNames).toContain('challenge-bug-hunting-youtrybe-squad-3');
  expect(RepoNames).toContain('iss-location');
});

// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error => {
        expect(error).toEqual({ error: 'Nenhum animal com esse nome!' })
      });
    });
  });
});