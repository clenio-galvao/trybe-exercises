let divLocal = document.querySelector('div');
let preferencia = {
    0: "Cor de fundo da tela:",
    1: "Cor do texto:",
    2: "Tamanho da fonte:",
    3: "Espaçamento entre as linhas do texto:",
    4: "Tipo da fonte (Font family):"
};

for (let i=0; i<5; i+=1){
    let div = document.createElement("div");
    div.className = "prefer";
    div.innerHTML = preferencia[i];
    divLocal.appendChild(div);
    let caixaTexto = document.createElement("input");
    caixaTexto.placeholder = "Digite em inglês";
    divLocal.appendChild(caixaTexto);
}