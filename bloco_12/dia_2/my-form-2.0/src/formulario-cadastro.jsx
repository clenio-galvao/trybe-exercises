import React from 'react';

class FormularioCadastro extends React.Component {
  constructor() {
    super()

    this.alterarAoDigitar = this.alterarAoDigitar.bind(this);

    this.state = {
      nome: '',
      email: '',
    }
  }

  alterarAoDigitar (event) {
    this.setState({[event.target.name]: event.target.value});
    if (event.target.name === 'nome') {
      this.setState({nome: event.target.value.toUpperCase()});
    }
  }

  render() {
    return (
    <form>
      <h1>Preencha o formulário abaixo:</h1>
      <label>
        <div>Nome</div> 
        <input type="text" name="nome" placeholder="Nome completo" value={this.state.nome} onChange={this.alterarAoDigitar} maxLength={40} required/>
      </label>
      <label>
        <div>E-mail</div> 
        <input type="text" name="email" placeholder="nome@server.com" value={this.state.email} onChange={this.alterarAoDigitar} maxLength={50} required/>
      </label>
    </form>
    );
  }
}

export default FormularioCadastro;
