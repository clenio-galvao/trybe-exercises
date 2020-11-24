const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (lesson) => {
  lesson.turno = 'manhã';
}
addTurno(lesson2);
//console.log(lesson2);

const keys = (lesson) => Object.keys(lesson);

const leng = (lesson) => keys(lesson).length;

const vals = (lesson) => Object.values(lesson);

const allLessons = {lesson1: Object.assign({}, lesson1), lesson2: Object.assign({}, lesson2), lesson3:Object.assign({}, lesson3)}

const totalAlunos = (list1, list2, list3) => list1.numeroEstudantes + list2.numeroEstudantes + list3.numeroEstudantes;

const retornaPosicao = (list, pos) => vals(list)[pos];

const verifica = (list, key, value) => {
  const resultKey = list.hasOwnProperty(key);
  let resultValue = false;
  let result = false;
  list[key] === value ? resultValue = true : resultValue = false;
  resultKey === true && resultval === true ? result = true : resutl = false;
  return result;
}

const alunosMat = (list) => {
  let contAlunos = 0;
  const arrays = Object.values(list);
  for (let index = 0; index < arrays.length; index += 1) {
    if (arrays[index].materia == 'Matemática') {
      contAlunos += arrays[index].numeroEstudantes;
    }
  }
  return contAlunos;
}

const creatReport = (list, prof) => {
  let contAlunos = 0;
  const arrays = Object.values(list);
  let aulas = [];
  for (let index = 0; index < arrays.length; index += 1) {
    if (arrays[index].professor == prof) {
      contAlunos += arrays[index].numeroEstudantes;
      aulas.push(arrays[index].materia);
    }
  }
  const report = {
    professor: prof,
    aulas: aulas,
    estudantes: contAlunos
  }
  return report;
}

console.log(creatReport(allLessons, 'Maria Clara'));
