import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemonGood;

    return (
      <div>
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
