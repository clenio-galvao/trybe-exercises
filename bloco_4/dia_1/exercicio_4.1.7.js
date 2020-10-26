/*Exercício 7: Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

nota = 100;
if (nota>=90 && nota<=100) {
    nota = "A";
    console.log("Sua nota é: " + nota);
}
else if (nota>=80 && nota<90) {
    nota = "B";
    console.log("Sua nota é: " + nota);
}
else if (nota>=70 && nota<80) {
    nota = "C";
    console.log("Sua nota é: " + nota);
}
else if (nota>=60 && nota<70) {
    nota = "D";
    console.log("Sua nota é: " + nota);
}
else if (nota>=50 && nota<60) {
    nota = "E";
    console.log("Sua nota é: " + nota);
}
else if (nota<50) {
    nota = "F";
    console.log("Sua nota é: " + nota);
}
else {
    console.log("Sua nota está fora dos parâmetros máximos ou mínimos, lembre-se: não existe nota menor que 0 ou maior que 100");
}