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

