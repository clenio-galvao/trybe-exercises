// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 6;
let imprimeLinha = [];
for (linha=1; linha<=n; linha += 1) {
    for (coluna=1; coluna<=n; coluna +=1) {
        imprimeLinha = "x" + imprimeLinha;    
    }
    console.log(imprimeLinha);
    imprimeLinha = "";
}