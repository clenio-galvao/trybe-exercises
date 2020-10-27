//  Depois, faça uma pirâmide com n asteriscos de base

let n = 11;
let metade = (n+1)/2;
let metDir = metade;
let metEsq = metade; 
let imprimeLinha = "";

for (linha=1; linha<=metade; linha += 1) {
    for (coluna=1; coluna<=n; coluna +=1) {       
        if ((coluna<metEsq) || (coluna>metDir)) {
            imprimeLinha = imprimeLinha + " ";
        } 
        else {
            imprimeLinha = imprimeLinha + "x";                  
        }        
    }
    console.log(imprimeLinha);
    imprimeLinha = "";
    metDir = metDir + 1;
    metEsq = metEsq - 1;
}