/*Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false

function verificaPalindrome(palavra){
    let ehPalin = false;
    let palavraInvertida = "";
        for (let index = (palavra.length-1); index >= 0 ; index -= 1) {
        palavraInvertida = palavraInvertida + palavra[index];   
    }
    if (palavraInvertida == palavra){
            ehPalin = true;
    }
    return ehPalin;
}
console.log(verificaPalindrome('ananananana'));
console.log(verificaPalindrome('desenvolvimento'));

Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.

// let arrayTeste = [2, 3, 6, 7, 10, 1];*/

function maior (array) {
    let aux = array[0];
    for (index in array) {
        if (array[index] > aux) {
            aux = index;
        }
    }
    return aux;   
}
/*console.log(maior(arrayTeste));

Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.

// arrayTeste = [2, 4, 6, 7, 10, 0, -3];

function menor (array) {
    let aux = array[0];
    for (index in array) {
        if (array[index] < aux) {
            aux = index;
        }
    }
    return aux;   
}
console.log(menor(arrayTeste));

Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.

//let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorString (array) {
    let nomeMaior = "";
    let teste = arrayTeste[0];
    for (index in array) {
        teste = array[index]
        if (teste.length > nomeMaior.length) {
            nomeMaior = array[index];
        }
    }
    return nomeMaior;   
}
console.log(maiorString(arrayTeste));

Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.

let arrayTeste = [2, 3, 2, 5, 8, 2, 3];


function numRepeteMais(array){
    let repeticao = [];
    let repeteMais = 0;
    let aux = 0;    
    for (let pos = 0; pos < array.length; pos +=1) {
        let rep = 0;
        let elemento = array[pos];         
        for (let index = 0; index < array.length; index +=1) {
            if (array[index] == elemento) {
                rep = rep + 1;           
            }            
        }
        if (rep > aux) {
            repeteMais = array[pos];
            aux = rep;
        }               
    } 
    return repeteMais;
}
console.log(numRepeteMais(arrayTeste));

Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15.
let num = 7;

function somaAteN (numero) {
    let soma = 0;
    for (let index = 1; index <= num; index += 1){
        soma = soma + index;
    }
    return soma
}
console.log(somaAteN(num));

Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be");
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan");
Retorno esperado: false*/

function verificaFimPalavra(nome, fim) {
    let res = true;
    let cont = nome.length-1;
    for (let index = fim.length-1; index >= 0; index -= 1) {
        if (nome[cont] !== fim[index]){
            res = false;            
        }
        cont = cont - 1;
    }    
    return res;
}
console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));


