import React from 'react';
import { pokemons } from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.botaoPassar = this.botaoPassar.bind(this);
    this.botaoAll = this.botaoAll.bind(this);
    this.botaoFiltrar = this.botaoFiltrar.bind(this);

    this.state = {
      pokemonInd: 0,
      filtredPokemons: pokemons,
    }
  }

  botaoAll() {
    this.setState(
      {
        pokemonInd: 0,
        filtredPokemons: pokemons
    });
  }

  botaoFiltrar(event) {
    const pokemonsFiltered = pokemons.filter((element) => element.type === event.target.name);
    this.setState(() => (
      {
        pokemonInd: 0,
        filtredPokemons: pokemonsFiltered,
      }
    ));
  }

  botaoPassar() {
    this.setState((anterior, _props) => this.state.filtredPokemons.length !== anterior.pokemonInd + 1 ? ({pokemonInd: anterior.pokemonInd + 1}) : ({pokemonInd: 0}));
  }

  render() {
    
    return (
      <div>
        <div className="pokedex">
          <Pokemon pokemonGood={this.state.filtredPokemons[this.state.pokemonInd]} />
        </div>
        <div>
        <button onClick={this.botaoAll}>All</button>
        <button onClick={this.botaoFiltrar} name="Fire">Fire</button>
        <button onClick={this.botaoFiltrar} name="Psychic">Psychic</button>
        </div>
        <button onClick={this.botaoPassar}>Mude o Pokemon</button>
      </div>
      
    );
  }
}

export default Pokedex;