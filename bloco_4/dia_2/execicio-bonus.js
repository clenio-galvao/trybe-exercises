/*Ordene o array numbers em ordem crescente e imprima seus valores;
Ordene o array numbers em ordem decrescente e imprima seus valores;
Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:*/

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let position = array[i];
      array[i] = array[j];
      array[j] = position;
    }
  }
}
console.log(array);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let a = 1; a < numbers.length; a++) {
    for (let b = 0; b < a; b++) {
      if (numbers[a] > numbers[b]) {
        let troca = numbers[a];
        numbers[a] = numbers[b];
        numbers[b] = troca;
      }
    }
}
console.log(numbers);

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let x = 0; x < numeros.length; x++) {    
    for (let y = x+1; y > x; y--) {    
        if (x = numeros.length-1){
            multiplica =  numeros[x] * 2;
            numeros[x] = multiplica;
        } else {
        multiplica =  numeros[x] * numeros[y];
        numeros[x] = multiplica;
        }
    }
}
console.log(numeros);  