import React from 'react';

import Estados from './data'

class FormularioCadastro extends React.Component {
  constructor() {
    super()

    this.alterarAoDigitar = this.alterarAoDigitar.bind(this);
    this.comecaComNumero = this.comecaComNumero.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: 'Estado',
    }
  }

  alterarAoDigitar (event) {
    if (event.target.name === 'nome') {
      return this.setState({nome: event.target.value.toUpperCase()});
    }
  
    else if (event.target.name === 'endereco') {
      const pattern = /^[a-zA-Z0-9, .]+$/;
      const digitado = event.target.value;
      
      if (digitado.match(pattern)) {
        return this.setState({[event.target.name]: event.target.value});
      }
    }

    return this.setState({[event.target.name]: event.target.value});

  }

  comecaComNumero(event) {
    const pattern = /^[0-9]/;
    const digitado = event.target.value[0];
    if (digitado.match(pattern)) {
      return this.setState({cidade: ''});
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
      <label>
        <div>CPF</div> 
        <input type="text" name="cpf" placeholder="apenas números" value={this.state.cpf} onChange={this.alterarAoDigitar} maxLength={11} required/>
      </label>
      <label>
        <div>Endereço</div> 
        <input type="text" name="endereco" placeholder="rua e número" value={this.state.endereco} onChange={this.alterarAoDigitar} maxLength={200} required/>
      </label>
      <label>
        <input type="text" name="cidade" placeholder="cidade" value={this.state.cidade} onBlur={this.comecaComNumero} onChange={this.alterarAoDigitar} maxLength={28} required/>
      </label>
      <label>
        <select name="estado" value={this.state.estado}  onChange={this.alterarAoDigitar}>
          {Estados.map(element => <option value={element.replace(/\s/g, '')}>{element}</option>)}
        </select>
      </label>
    </form>
    );
  }
}

export default FormularioCadastro;
