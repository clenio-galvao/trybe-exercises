const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = (url, object) => {
  fetch(url, object)
  .then(response => response.json())
  .then(data => appendJoke(data.joke));
};

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const appendJoke = (joke) => {
  let jokeLocal = document.getElementById('jokeContainer');
  jokeLocal.innerHTML = joke;
}

window.onload = fetchJoke(API_URL, myObject);