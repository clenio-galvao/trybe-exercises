/*(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
Dicas:
Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:
Copiar
     | I   | 1    |
     | --- | ---- |
     | IV  | 4    |
     | V   | 5    |
     | IX  | 9    |
     | X   | 10   |
     | XL  | 40   |
     | L   | 50   |
     | XC  | 90   |
     | C   | 100  |
     | CD  | 400  |
     | D   | 500  |
     | CM  | 900  |
     | M   | 1000 |
Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.*/

let numeralRomano = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

for (let key in numeralRomano) {
    console.log(numeralRomano[key]);
}

let string = 'abc';

console.log(string[1]);

function retornaValorNumeralRomano (string){
    //transformar string em array
    let array = [];
    for (let n = 0; n<string.length; n +=1) {
        array.push(string[n]); 
    }
    let valorNumeralRomano = 0;
    if (array.length>=2){        
        
            for (let key in array) {            
                valorNumeralRomano += numeralRomano[array[key]];
            }    
            /*    
            if (numeralRomano[anterior] < numeralRomano[atual]) {
               valorNumeralRomano = valorNumeralRomano - numeralRomano[anterior];
               valorNumeralRomano = valorNumeralRomano + numeralRomano[atual];
            }
            valorNumeralRomano = valorNumeralRomano + numeralRomano[atual];
            else {
               valorNumeralRomano = valorNumeralRomano + numeralRomano[atual];                
            }         
        }        
    }    
    }
    else{
        valorNumeralRomano = numeralRomano[string];*/
        
    }
    return valorNumeralRomano;
}
let numeralInserido = "XI";
console.log(retornaValorNumeralRomano(numeralInserido));