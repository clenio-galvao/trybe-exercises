const butonLocal = document.getElementById('clique');
const soma = document.getElementById('soma');
let clickCount = 0;
butonLocal.addEventListener('click', () => {
  clickCount += 1;
  soma.innerText = clickCount;
});

