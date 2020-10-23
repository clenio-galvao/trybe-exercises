/*Exercício 5: Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals*/

peca = "queen";
peca = peca.toLowerCase();

switch (peca) {
    case "king":
        console.log("pode se mover em qualquer direção mas apenas uma casa");
        break;
    case "queen":
        console.log("pode se mover em qualquer direção e quantas casas estiverem livres");
        break;
    case "rook":
        console.log("pode mover-se em linha reta e quantas casas estiverem livres");
        break;
    case "bishop":
        console.log("pode mover-se na diagonal e quantas casas estiverem livres");
        break;
    case "knight":
        console.log("em forma de L, move em uma direção duas casas depois vira 90 graus e anda mais uma casa");
        break;
    case "pawn":
        console.log("eles se movem para frente, mas capturam diagonalmente. Os peões só podem avançar uma casa por vez, exceto em seu primeiro movimento, onde podem avançar duas casas.");
        break;
default:
    console.log("esta não é uma peça de xadrez");
}