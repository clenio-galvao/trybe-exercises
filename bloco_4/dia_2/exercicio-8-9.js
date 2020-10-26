/* Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.*/

let array = [];
for (n=0; n<25; n+=1) {
    array[n] = Math.round(Math.random()*80);
}
console.log(array);

let arrayDiv = [];
for (n=0; n<25; n+=1) {
    divisao = array[n] / 2;
    arrayDiv[n] = divisao;
}
console.log(arrayDiv);