// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 6;
let imprimeLinha = [];
for (linha=1; linha<=n; linha += 1) {
    for (coluna=1; coluna<=linha; coluna +=1) {
        imprimeLinha = "x" + imprimeLinha;
        console.log(imprimeLinha);    
    }
    imprimeLinha = "";
}