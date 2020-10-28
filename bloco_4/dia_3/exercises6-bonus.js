/*6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.*/

let num = 27;
let qtdDiv = 0;    
for (let div = 2; div < num; div += 1) {
    if ((num % div)>0) {
        qtdDiv += 1;        
    }
}
if ((qtdDiv+2)==num) {
    console.log("é primo");
} else {
    console.log("n é primo");
}