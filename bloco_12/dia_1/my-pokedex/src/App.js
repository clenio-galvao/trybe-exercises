import React from 'react';
import { pokemons } from './data';
import Pokedex from './pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
