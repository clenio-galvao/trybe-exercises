let n = 11;
let metade = (n+1)/2;
let metDir = metade;
let metEsq = metade; 
let imprimeLinha = "";

for (let linha=1; linha<=metade; linha += 1) {
    for (let coluna=1; coluna<=n; coluna +=1) {       
        if ((coluna==metEsq) || (coluna==metDir)) {
            imprimeLinha = imprimeLinha + "x";
        } 
        else if (linha==metade){
            imprimeLinha = imprimeLinha + "x";                  
        }        
        else{
            imprimeLinha = imprimeLinha + " ";
        }
    }
    console.log(imprimeLinha);
    imprimeLinha = "";
    metDir = metDir + 1;
    metEsq = metEsq - 1;
}