import React from 'react';
import { pokemons } from './data';
import Pokedex from './pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
