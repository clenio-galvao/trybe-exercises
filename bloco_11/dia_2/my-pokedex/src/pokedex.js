import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div>
        {pokemons.map(data => <Pokemon pokemonGood={data} />)}
      </div>
    );
  }
}

export default Pokedex;