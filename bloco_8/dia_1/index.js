const assert = require('assert');

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

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947() {
  const objetoValidado = books.find(element => element.author.birthYear === 1947);
  return objetoValidado.author.name;
}

assert.equal(authorBornIn1947(), 'Stephen King');

// Retorne o nome do livro de menor nome.

function smallerName () {
  let nameBook;
  let aux = books[0].name.length;
  books.forEach((element) => {
    if (element.name.length < aux) {
      aux = element.name.length;
      nameBook = element.name;
    }
  });
  return nameBook;
}

assert.equal(smallerName(), 'Duna');

// Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
  const posBook = books.find(element => element.name.length === 26)
  return posBook.name;
}

assert.deepEqual(getNamedBook(), 'As Crônicas de Gelo e Fogo');

// Ordene os livros por data de lançamento em ordem decrescente.
function booksOrderedByReleaseYearDesc() {
  const yearDesc = [];
  const booksOrdered = [];
  books.forEach(element => yearDesc.push(element.releaseYear));
  yearDesc.sort((a, b) => b - a);
  yearDesc.forEach((element) => {
    for (let index = 0; index < yearDesc.length; index += 1) {
      if (element === books[index].releaseYear) {
        booksOrdered.push(books[index].name);
        break;
      }
    }
  });
  return booksOrdered;
}

assert.deepEqual(booksOrderedByReleaseYearDesc(), [
  'As Crônicas de Gelo e Fogo',
  'A Coisa',
  'Duna',
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu'
]);

// Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

