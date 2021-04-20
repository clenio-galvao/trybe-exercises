import React from 'react';

class FormularioCurriculo extends React.Component {
  constructor() {
    super()

    this.alterarAoDigitar = this.alterarAoDigitar.bind(this);
    this.exibirMsg = this.exibirMsg.bind(this);

    this.state = {
      resumo: '',
      cargo: '',
      cargoCont: 0,
      descricaoCargo: '',
    }
  }
  alterarAoDigitar(event) {
    return this.setState({[event.target.name]: event.target.value});
  }

  exibirMsg() {
    if (this.state.cargoCont === 0) {
      alert('Preencha esse campo com cuidado');
      this.setState({cargoCont: 1});
    }
  }

  render() {
    const { onChildChange } = this.props;
    
    return (
      <form onChannge={onChildChange(this.state)}>
        <h1>Insira os dados do seu último emprego</h1>
        <div>
          <textarea name="resumo" placeholder="Resuma em até 1.000 caracteres o seu antigo emprego" value={this.state.resumo} onChange={this.alterarAoDigitar} required cols="100" rows="10"></textarea>
        </div>
        <div>
          <textarea name="cargo" placeholder="Qual cargo você exercia" value={this.state.cargo} onChange={this.alterarAoDigitar} onMouseEnter={this.exibirMsg} maxLength={40} required cols="30" rows="10"></textarea>
        
          <textarea name="descricaoCargo" placeholder="Descreva o cargo que você exercia em até  500 caracteres" value={this.state.descricaoCargo} onChange={this.alterarAoDigitar} maxLength={500} required cols="67" rows="10"></textarea>
        </div>
      </form>
    );
  }
}

export default FormularioCurriculo
