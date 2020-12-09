const promise = new Promise((resolve, reject) => {
  const numbers = [];
  for (let ind = 0; ind < 10; ind += 1) {
    const number = Math.floor(Math.random()* 51);
    numbers.push(number*number);
  }
  const redux = numbers.reduce((acc, ele) => acc + ele)
  if (redux < 8000) {
    const array = [redux/2, redux/3, redux/5, redux/10];
    return resolve(array);
  }
  reject(redux);
})
.then(msg => console.log(msg))
.catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
//   if (number > 10 || number <= 5) {
//     return reject(number);
//   }
//   resolve(number);
// })
// .then(number => `Que sucesso =) nosso número foi ${number}`)
// .then(msg => console.log(msg))
// .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));