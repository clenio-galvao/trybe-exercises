const textoString = 'Tryber x aqui!';
const skills = ["js", "css", "html", "foco", "engajamento"];

let string = (texto, palavra) => {
  const separar = texto.split('x');
  const novaString = `${separar[0]}${palavra}${separar[1]}`;
  return novaString;
}
// console.log(string(textoString, 'clênio'));

let newString = (string) => {
  skills[0] = `- ${skills[0]}`
  const newS = skills.join('\n- ');
  console.log(`${string}
  
Minhas cinco principais habilidades são:
${newS}

#goTrybe".`);
}

newString(string(textoString, 'clênio'));