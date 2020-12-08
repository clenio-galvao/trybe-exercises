const estados = {
    0: ' ', AC: 'Acre', AL: 'Alagoas', AP: 'Amapá', AM: 'Amazonas', BA: 'Bahia', CE: 'Ceará', DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás', MA: 'Maranhão', MT:'Mato Grosso', MS: 'Mato Grosso do Sul', MG: 'Minas Gerais', PA: 'Pará', PB: 'Paraíba', PR: 'Paraná', PE: 'Pernambuco', PI: 'Piauí', RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RS: 'Rio Grande do Sul', RO: 'Rondônia', RR: 'Roraima', SC: 'Santa Catarina', SP: 'São Paulo', SE: 'Sergipe', TO: 'Tocantins'};

for (let index in estados) {
    const estadosLocal = document.querySelector('#input-estado');
    let estate = document.createElement('option');
    estate.name = index;
    estate.innerText = estados[index];
    estadosLocal.appendChild(estate)
}

function preventDef(event) {
    event.preventDefault();
}

function interrompe() {
    document.getElementById('formulario').addEventListener('click', preventDef);
}



