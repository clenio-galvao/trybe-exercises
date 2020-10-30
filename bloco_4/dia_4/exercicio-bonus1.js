/*(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
Dicas:
Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:
Copiar
     | I   | 1    |
     | --- | ---- |
     | IV  | 4    |
     | V   | 5    |
     | IX  | 9    |
     | X   | 10   |
     | XL  | 40   |
     | L   | 50   |
     | XC  | 90   |
     | C   | 100  |
     | CD  | 400  |
     | D   | 500  |
     | CM  | 900  |
     | M   | 1000 |
Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.*/

// A versão anterior não estava indo, vi o Gabarito do exercício em https://app.betrybe.com/course/fundamentals/javascript/js-features/js-part-4-solutions e entendi como funciona. O meu erro era nõ criar um Array com os resultados para depois comparar os valores entre si. O gabarito estava com uns erros mas eu consegui corrigir.

function Romanos(roma) {
    let romanos = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let arrayNumbers = [];
    let result = 0;
    let aux = 0;
    for (let indice in roma) {
      arrayNumbers[indice] = romanos[roma[indice]];
    }
  
    for (let indice in arrayNumbers) {
        aux += 1;
      if (arrayNumbers[indice] < arrayNumbers[aux]) {
        result -= arrayNumbers[indice];
      } else {
        result += arrayNumbers[indice];
      }
    }
  
    return result;
  }
  
  console.log(Romanos('DMDMXIV'));