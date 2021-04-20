import React from 'react';
import { pokemons } from './data';
import Pokemon from './Pokemon';
import Button from './Button';

import './pokedex.css';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.botaoPassar = this.botaoPassar.bind(this);
    this.botaoAll = this.botaoAll.bind(this);
    this.botaoFiltrar = this.botaoFiltrar.bind(this);
    this.filtrarClasses = this.filtrarClasses.bind(this);

    this.state = {
      pokemonInd: 0,
      filtredPokemons: pokemons,
      botaoOn: false,
    }
  }

  botaoAll() {
    this.setState(
      {
        pokemonInd: 0,
        filtredPokemons: pokemons,
        botaoOn: false,
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
    if (pokemonsFiltered.length === 1) {
      this.setState({botaoOn: true});
    } else {
      this.setState({botaoOn: false});
    }
  }

  filtrarClasses() {
    const pokTypes = pokemons.map(element => element.type)
      .reduce((unico, item) => {
        return unico.includes(item) ? unico : [...unico, item]
      }, []);
    return pokTypes;
  }


  botaoPassar() {
    this.setState((anterior, _props) => this.state.filtredPokemons.length !== anterior.pokemonInd + 1 ? ({ pokemonInd: anterior.pokemonInd + 1 }) : ({ pokemonInd: 0 }));
  }

render() {

  return (
    <div>
      <div className="pokedex">
        <Pokemon pokemonGood={this.state.filtredPokemons[this.state.pokemonInd]} />
      </div>
      <div>
        <button onClick={this.botaoAll}>All</button>
        {this.filtrarClasses().map(elem => <Button onClick={this.botaoFiltrar} type={elem} disabled={false}/>)}
      </div>
      <button className="mudaPok" onClick={this.botaoPassar} disabled={this.state.botaoOn}>Mude o Pokemon</button>
    </div>

  );
}
}

export default Pokedex;