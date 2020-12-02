// 1. Dada uma matriz de matrizes, transforme em uma única matriz.
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const newArray = arrays.reduce((acc, element) => {
    return acc.concat(element);
  }, []);
  return newArray;
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);

// 2. Crie uma string com os nomes de todas as pessoas autoras.

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


function allNames() {
  const authorNames = books.reduce((acc, element, index) => {
    if (index === books.length - 1) {
      return `${acc} ${element.author.name}.`;
    } else {
      return `${acc} ${element.author.name},`;
    }
  }, '');
  return `Nomes:${authorNames}`;
}

assert.deepStrictEqual(allNames(), "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");

// 3. Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

let expectedResult = 43;

function averageAge() {
  let ind = 0;
  const ages = books.reduce((acc, element, index) => {
    ind = index;
    return  acc + (element.releaseYear - element.author.birthYear);
  }, 0)
  return ages/(ind+1);
}

assert.strictEqual(averageAge(), expectedResult);

// 4. Encontre o livro com o maior nome.
expectedResult = {};
expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991
};

function longestNamedBook() {
  const bookBigName = books.reduce((acc, element) => {
    if (acc.name.length < element.name.length) {
      return element;
    } else {
      return acc;
    }
  });
  return bookBigName;
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);

// 5. Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];


function containsA() {
  const len = names.reduce((acc, element) => {
    return acc + element;
  }).split('').filter(element => element === 'a' || element === 'A').length;
  return len;
}

assert.deepStrictEqual(containsA(), 20);

// 6. Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
  let ind = 0;
  const studentsObject = students.map((element, index) => ({ 'name': element, 'average': (grades[index].reduce((acc, element, index) => {
    ind = index;
    return  acc + element;
  }))/(ind + 1) }));
  return studentsObject;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
