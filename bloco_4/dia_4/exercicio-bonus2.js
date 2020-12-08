/*Para o próximo exercício você irá precisar ter uma conta no CodeWars, para entender como fazê-lo acesse esse o conteúdo que fizemos sobre isso. Após seguir os passos para registro acesse o desafio proposto e então clique em TRAIN, você então será redirecionado para a página onde o desafio deve ser feito. Quando tiver finalizado o exercício clique em TEST para verificar, com testes simples, se sua solução satisfaz o que foi pedido. Passando nesses testes clique em ATTEMPT, ao fazer isso seu código passará por todos os testes existentes para validação da solução. Caso sua solução esteja correta o botão SUBMIT ficará disponível, clique nele para submeter sua resposta, caso contrário volte ao seu código e veja o que ainda não está satisfazendo o que se é pedido, repita esse processo até que sua solução esteja correta.
Desafio - 16 + 8 = 214;
Esse desafio irá exigir um pouco de conhecimento sobre alguns métodos do JavaScript, para isso pesquise quando for necessário e caso surja alguma dúvida peça ajuda no Slack. Dúvidas em como fazer uma boa pesquisa? Sem problemas! Acesse esse conteúdo sobre como pesquisar como uma pessoa desenvolvedora.*/


function somaDecimais (num1, num2) {

    let somaDecimais = { 
        0: '',
        1: '',
        2: '',
        3: '',
        4: ''   
    };
    let decimaisA1 = { 
        0: '',
        1: '',
        2: '',
        3: '',
        4: ''   
    };
    let decimaisA2 = { 
        0: '',
        1: '',
        2: '',
        3: '',
        4: ''   
    };

    // transformar um número num array vou usar o to.String()

    let array1 = [];
    let array2 = [];

    array1 = num1.toString();
    array2 = num2.toString();

    // verificar maior string
    let maior = array1.length;
    if (array2.length>array1.length) {
        maior = array2.length;
    }
    // colocar os arrays nos objetos
    let aux = 0;
    for (let index1 = array1.length - 1; index1 >=0; index1 -= 1) {
        decimaisA1[index1] = parseInt(array1[aux]);
        aux += 1;        
    }
    
    aux = 0;
    for (let index2 = array2.length - 1; index2 >=0; index2 -= 1) {
        decimaisA2[index2] = parseInt(array2[aux]);
        aux += 1;
    }

    
    
//console.log(decimaisA1);
//console.log(decimaisA2);
    // somar os objetos e colocar no objeto soma
    for (let index = 0; index < maior; index += 1) {        
        somaDecimais[index] = decimaisA1[index] + decimaisA2[index];            
    }
//console.log(somaDecimais);

    // transforma em string
    for (let key in somaDecimais) {
        somaDecimais[key] = somaDecimais[key].toString();
    }
    //soma o resultado*/
    let output = '';
    for (let chave = maior - 1; chave >= 0; chave -= 1){
        output += somaDecimais[chave];
    }
    return output;
}
    

console.log(somaDecimais(13, 5)); 