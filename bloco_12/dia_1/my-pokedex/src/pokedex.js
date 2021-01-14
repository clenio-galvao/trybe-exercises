import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map(data => <Pokemon pokemonGood={data} />)}
        <button>Mude o Pokemon</button>
      </div>
    );
  }
}

export default Pokedex;