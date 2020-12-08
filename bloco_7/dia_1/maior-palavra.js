const longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu" // retorna 'aconteceu'

const maiorPalavra = (string) => {
  const palavrasString = string.split(' ');
  let maior = 0;
  let indexMaior;
  for (let index = 0; index < palavrasString.length; index += 1) {
    if (palavrasString[index].length > maior) {
      maior = palavrasString[index].length;
      indexMaior = index;
    }
  }
  console.log(palavrasString[indexMaior]);
}

maiorPalavra(longestWord);