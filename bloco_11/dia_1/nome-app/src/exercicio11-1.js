import React from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Estudar React', 'estudar inglês', 'pensar em idéias para o hackathon'];

class IncluiTask extends React.Component {
  render() {
    return tarefas.map(tar => task(tar));
  }
}

export default IncluiTask;
