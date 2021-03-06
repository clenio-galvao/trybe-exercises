//Maaaaaaravilhosooooo
// Desafio 1
function compareTrue(val1, val2) {
  let result = false;
  if ((val1===true) && (val2===true)){
      result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height){
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string){
  let index = 0;
  let array = [];
  for (let i = 0; i < string.length; i += 1){    
    if (string[i]!==" "){
      array[index] = '';
    } else {
      index += 1;
    }
  }
  index = 0;
  for (let i = 0; i < string.length; i += 1){    
    if (string[i]!==" "){
        array[index] += string[i];
    } else {
        index += 1;
    }
  }
  return array;
}

// Desafio 4
function concatName(array){
  return array[array.length-1]+', '+array[0];
}

// Desafio 5
function footballPoints(wins, ties){
  return wins*3 + ties;
}

// Desafio 6
function highestCount(array){
  let hight = array[0];
  let rept = 1;
  for (let i=1; i<array.length; i += 1){
      if (array[i]>hight){
          hight = array[i];
          rept = 1;
      } else if (array[i]==hight){
           rept += 1;
      }
  }
  return rept;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2){
  if ((mouse > cat1)&&(mouse > cat2)){
    if ((mouse - cat1)<(mouse - cat2)){
        return "cat1";
    } else if ((mouse - cat1)>(mouse - cat2)){
        return "cat2";
    } else {
        return "os gatos trombam e o rato foge";
    }
  }
  else if ((mouse < cat1)&&(mouse > cat2)){
    if ((cat1 - mouse)<(mouse - cat2)){
        return "cat1";
    } else if ((cat1 - mouse)>(mouse - cat2)){
        return "cat2";
    } else {
        return "os gatos trombam e o rato foge";
    }
  }
  else if ((mouse > cat1)&&(mouse < cat2)){
    if ((mouse - cat1)<(cat2 - mouse)){
        return "cat1";
    } else if ((mouse - cat1)>(cat2 - mouse)){
        return "cat2";
    } else {
        return "os gatos trombam e o rato foge";
    }
  }
  else if ((mouse < cat1)&&(mouse < cat2)){
    if ((cat1- mouse)<(cat2 - mouse)){
        return "cat1";
    } else if ((cat1 - mouse)>(cat2 - mouse)){
        return "cat2";
    } else {
        return "os gatos trombam e o rato foge";
    }
  }
}

// Desafio 8
function fizzBuzz(array){
  let fizz = 0;
  let buzz = 0;
  let arrayResult = [];
  for (let i=0; i<array.length; i+=1){
      fizz = array[i]%3;
      buzz = array[i]%5;
      if ((fizz ==0)&&(buzz!==0)){
          arrayResult[i] = "fizz";
      } else if ((fizz !==0)&&(buzz ==0)){
          arrayResult[i] = "buzz";
      } else if ((fizz ==0)&&(buzz==0)){
          arrayResult[i] = "fizzBuzz";
      } else {
          arrayResult[i]="bug!";
      }
  }
  return arrayResult;
}

// Desafio 9
function encode(string) {
  let object = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }
  let array = string.split('');
  for (let i = 0; i < string.length; i+=1){
    for (let index in object){
      if (array[i] == index){
        array[i] = object[index];
      }
    }
  }
  string = array.join('');
  return string;
}

function decode(string) {
  let object = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  }
  let array = string.split('');
  array.forEach((element, ind) => {
    for (let index in object) {
      if (element == index){
        array[ind] = object[index];
      }
    }
  });

  string = array.join('');
  return string;
}

// Desafio 10
function techList(array, name) {
  array = array.sort();
  if ((array.length === 0) || (array[0] === "") || (array[0] === " ")) {
    return 'Vazio!';
  } 
  else {
    const newArray = array.map((element) => (
      {
        tech: element,
        name: name
      }
    ));
    return newArray;
  }
}

// Desafio 11
function timesRepetMore (array2){  
  let times = [];
  let moreTimes = 0;
  for (let i = 0; i<array2.length; i +=1){
    let aux = array2[i];
    times[i] = 0;    
    for (let o = 0; o<array2.length; o +=1){      
      if (array2[o]==aux){
        times[i] += 1;
      }
    }
    if (moreTimes<times[i]){
      moreTimes = times[i];
    }
  } 
  return moreTimes;
}

function generatePhoneNumber(array) {  
  let phoneNumber = "";
  if ((array.length>11)||(array.length<11)){
    return "Array com tamanho incorreto.";
  }
  else if (timesRepetMore(array)>2) {
    return "não é possível gerar um número de telefone com esses valores"; 
  } 
  else {
    for (let i = 0; i<array.length; i +=1){
      if ((array[i]<0)||(array[i]>9)){
        return "não é possível gerar um número de telefone com esses valores";      
      }
      else { // usei a técnica do Vinicius Ribeiro Adaptada
        phoneNumber = "(" + array.join('').slice(0,2)+") "+array.join('').slice(2,7)+"-"+array.join('').slice(7,11);    
      }
    }
  }
  return phoneNumber  
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (((lineA<lineB+lineC)&&(lineA>Math.abs(lineB-lineC)))||((lineB<lineA+lineC)&&(lineB>Math.abs(lineA-lineC)))||((lineC<lineA+lineB)&&(lineC>Math.abs(lineA-lineB)))){
    return true;
  } else {
    return false;
  }  
}

// Desafio 13
function hydrate(string) {
  // utilizamos uma solução do site: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994 MODIFICADA PARA NOSSO ENTENDEDIMENTO
  let inclui = /\d+/g;  
  let matches = string.match(inclui);
  console.log(matches);
  let soma = 0;
  for (let i = 0; i < matches.length; i += 1) {
    soma += parseInt(matches[i], 10);
  }
  if (soma === 1){
    return `${soma} copo de água`;
  } 
  else {
    return `${soma} copos de água`;
  }
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
