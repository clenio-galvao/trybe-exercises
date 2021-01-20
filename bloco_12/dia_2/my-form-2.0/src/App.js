import React from 'react';

import FormularioCadastro from './formulario-cadastro.jsx';
import FormularioCurriculo from './formulario-curriculo.jsx';
import BotaoMagico from './botao.js'

import './App.css';

class App extends React.Component {
  constructor(){
    super()

    this.onChildChange = this.onChildChange.bind(this);

    this.state = {
      resumo: '',
    }
  }

  onChildChange(stateFilho) {
    const demo = this.props.stateFilho;
    console.log(demo)
  }

  render() {
    return (
      <main>
        <FormularioCadastro />

        <FormularioCurriculo onChildChange={this.onChildChange}/>
        <br/>
        <BotaoMagico />
      </main>
    );
  }
}

export default App;
