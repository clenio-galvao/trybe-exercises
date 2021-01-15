import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemonGood } = this.props;
    const { name, type, averageWeight, image } = pokemonGood;

    return (
      <div className="pokemon">
        <div>
          <div>{name}</div>
          <div>{type}</div>
          <div>Average Weight: {averageWeight.value}{averageWeight.measurementUnit}</div>
        </div>
        <img src={image} alt='foto do pokemon'></img>
      </div>
    )
  }
}

export default Pokemon
