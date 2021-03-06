function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  let daysLocal = document.getElementById("days");
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let cadaDia = dezDaysList[i];
    let cadaEspaco = document.createElement("li");
    cadaEspaco.innerHTML = cadaDia;
    cadaEspaco.className = "day";
    if ((cadaDia == 24) || (cadaDia == 25) || (cadaDia == 31)) {
        cadaEspaco.className = cadaEspaco.className + " holiday";        
    }
    if ((cadaDia == 4) || (cadaDia == 11) || (cadaDia == 18) || (cadaDia == 25)) {
        cadaEspaco.className = cadaEspaco.className + " friday";
    }
    daysLocal.appendChild(cadaEspaco);
  }
  let listaDaysLocal = document.querySelectorAll(".day");

  let buttonLocal = document.querySelector(".buttons-container");
  
  function createButton (nome, id){
      let botaoFeriados = document.createElement("button");
      botaoFeriados.id = id;
      botaoFeriados.innerHTML = nome;       
      buttonLocal.appendChild(botaoFeriados);    
  }
  createButton("Feriados", "btn-holiday");
  createButton("Sexta-Feira", "btn-fryday");

  let buttonFeriadosLocal = document.querySelector("#btn-holiday");
  let diasFeriadoLocal = document.querySelectorAll(".holiday");
  
  function mudaCorElemento () {     
    if (diasFeriadoLocal[0].style.backgroundColor == ""){
        for (let i = 0; i<diasFeriadoLocal.length; i +=1){
            diasFeriadoLocal[i].style.backgroundColor = "Yellow";
        }
    } 
    else {
        for (let i = 0; i<diasFeriadoLocal.length; i +=1){
            diasFeriadoLocal[i].style.backgroundColor = "";
        }
    }
  }

  buttonFeriadosLocal.addEventListener("click", mudaCorElemento);

let buttonSextaLocal = document.getElementById("btn-fryday");
let diasSextouLocal = document.querySelectorAll(".friday");
let diasSexta = [4, 11, 18, 25];
function mudaTextoElemento () {     
    for (let i = 0; i<diasSextouLocal.length; i +=1){
        if (diasSextouLocal[i].innerHTML == diasSexta[i]){                                                                    
            diasSextouLocal[i].innerHTML = "Só alegria";
        }
        else {
            diasSextouLocal[i].innerHTML = diasSexta[i];
        }
    }
}
buttonSextaLocal.addEventListener("click", mudaTextoElemento);

function zoom(evento) {   
    for (let i = 0; i < dezDaysList.length; i += 1) {
        
        evento.target.style.fontSize = '500%';      
    }
}
daysLocal.addEventListener("mouseover", zoom);