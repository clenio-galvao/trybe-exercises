// Agora inverta o lado do triângulo.

let n = 6;
let imprimeLinha = "";
for (linha=1; linha<=n; linha += 1) {
    for (coluna=n; coluna>=1; coluna -=1) {
        if (linha<coluna){
            imprimeLinha = imprimeLinha + " ";
        } else {
           imprimeLinha = imprimeLinha + "x";                  
        }
    }
    console.log(imprimeLinha);
    imprimeLinha = "";
}