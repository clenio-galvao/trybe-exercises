// const fatorial = num => {
//   if (num < 0) {
//     return `erro!`
//   } else if ((num === 0) || (num === 1)) {
//     return 1;
//   } else {
//       let resul = num;
//       while (num > 2) {
//         resul *= --num;
//       }
//       return resul
//   }
// }
// console.log(fatorial(5));

let fatorial = (num) => {
  if(num==0) {
      return 1;
  }
  return (num * fatorial (num-1) );
}

console.log(fatorial(6)); // 720