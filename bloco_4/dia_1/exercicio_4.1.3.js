//Exercício 3: Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

a = 1;
b = 2;
c = 3;

if (a > b) {
    if (a > c) {
        maior = a;
    }
    else if (b > c) {
        maior = b;    
    }
    else {
        maior = c;
    }
}
else if (b > c) {
    maior = b;
}
else {
    maior = c;
}
console.log("O maior entre os 3 números é: " + maior)