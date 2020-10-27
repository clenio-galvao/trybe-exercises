// Agora inverta o lado do triângulo.

let n = 6;
let imprimeLinha = [];
for (linha=1; linha<=n; linha += 1) {
    for (coluna=1; coluna<=linha; coluna +=1) {
        imprimeLinha = "x" + imprimeLinha;
        console.log(imprimeLinha);    
    }
    imprimeLinha = "";
}