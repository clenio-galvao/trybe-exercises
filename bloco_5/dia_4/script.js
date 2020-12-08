let divLocal = document.querySelector('.div-conteiner');
let preferencia = {
    0: "Cor de fundo da tela:",
    1: "Cor do texto:",
    2: "Tamanho da fonte:",
    3: "Espaçamento entre as linhas do texto:",
    4: "Tipo da fonte (Font family):"
};



// Atualiza a quantidade de visitar no site, utilizando o LocalStorage
function updateVisit() {
    if (typeof (Storage) != "undefined") {
      if(localStorage.count !== undefined) {
        let count = parseInt(localStorage.count);
        count+=1;
        localStorage.count = count;
    } else {
        localStorage.count = 1;        
      }
    } else {
      document.write("Sem suporte para Web Storage");
    }  
  }
  updateVisit();
  localStorage.count = 0;

  if (parseInt(localStorage.count)<1){      
    document.getElementsByTagName("h2").innerHTML = "Escolha suas preferencias digitando em inglês:";
    function criaElementos (){
      for (let i=0; i<5; i+=1){
          let div = document.createElement("div");          
          div.innerHTML = preferencia[i];          
          divLocal.appendChild(div);
          let caixaTexto = document.createElement("input");
          caixaTexto.placeholder = "Digite em inglês";
          caixaTexto.id = "prefer"+(i+1);
          divLocal.appendChild(caixaTexto);
      }
    }
    criaElementos()
  }
  

  const prefer1 = document.querySelector('#prefer1');
  let div = document.querySelector('#textoDoBlog');
  prefer1.addEventListener("keyup", function (){   
    localStorage.setItem("Cor de fundo da tela:", prefer1.value);     
    if (div.style.backgroundColor != localStorage["Cor de fundo da tela:"]){
      div.style.backgroundColor = localStorage["Cor de fundo da tela:"];
    } 
  } );  
  if (div.style.backgroundColor != localStorage["Cor de fundo da tela:"]){
    div.style.backgroundColor = localStorage["Cor de fundo da tela:"];
  } 

  // podemos agora replicar essa function para os outros inputs
  // podemos fazer um menu fixo na lateral esquerda 
  // colocar mais texto
  // colocar paddings e outros enfeites na estrutura do texto
  
  

  const prefer2 = document.querySelector('#prefer2');
  function mudaCorLetra (){    
    localStorage.setItem("Cor do texto:", prefer2.value);
    console.log(localStorage); 
  }  
  prefer2.addEventListener("keyup", mudaCorLetra);

  const prefer3 = document.querySelector('#prefer3');
  function mudaTamanhoFonte(){    
    localStorage.setItem("Tamanho da fonte:", prefer3.value);
    console.log(localStorage); 
  }  
  prefer3.addEventListener("keyup", mudaTamanhoFonte);

  const prefer4 = document.querySelector('#prefer4');
  function mudaEspacoLinhas (){    
    localStorage.setItem("Espaçamento entre as linhas do texto:", prefer4.value);
    console.log(localStorage); 
  }  
  prefer4.addEventListener("keyup", mudaEspacoLinhas);

  const prefer5 = document.querySelector('#prefer5');
  function mudaTipoFonte (){    
    localStorage.setItem("Tipo da fonte (Font family):", prefer5.value);
    console.log(localStorage); 
  }  
  prefer5.addEventListener("keyup", mudaTipoFonte);
  
  