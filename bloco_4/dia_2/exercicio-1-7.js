/*1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
2- Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
 A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
4- Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
5- Utilizando for, descubra qual o maior valor contido no array e imprima-o;
6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
7- Utilizando for, descubra qual o menor valor contido no array e imprima-o;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(numbers[7]);
console.log(numbers[8]);
console.log(numbers[9]);

soma = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];
console.log("A soma dos números da variável numbers é: " + soma)

mediaA = soma / numbers.length;
console.log("A média aritmética dos números da variável numbers é: " + mediaA)

if (mediaA>20){
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

let maior = numbers[0]
for (n=1; n<numbers.length; n++){
    if (numbers[n]>maior){
        maior = numbers[n]                
    } 
}
console.log("O maior valor é: " + maior)

let impar = 0;
for (n=1; n<numbers.length; n++){
    if (numbers[n]%2==1) {
        impar = impar + 1;
    }
}
if (impar>0){
    console.log(`Temos ${impar} números ímpar`)
} else {
    console.log(`nenhum valor ímpar encontrado`)
}

let menor = numbers[0]
for (n=1; n<numbers.length; n++){
    if (numbers[n]<menor){
        menor = numbers[n]                
    }
}
console.log("O menor valor é: " + menor)