/*Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false*/
/*
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

/*Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.*/

// let arrayTeste = [2, 3, 6, 7, 10, 1];
/*
function maior (array) {
    let aux = array[0];
    for (index in array) {
        if (array[index] > aux) {
            aux = index;
        }
    }
    return aux;   
}
console.log(maior(arrayTeste));

/*Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.*/

// arrayTeste = [2, 4, 6, 7, 10, 0, -3];
/*
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

/*Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.*/

arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

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
