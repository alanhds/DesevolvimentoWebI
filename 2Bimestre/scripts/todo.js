//AO CLICAR
//verificar se existe algo dentro da caixa de texto
//PEGAR AS INFORMAÇÕES NA CAIXA DE TEXTO
//CRIAR UM ELEMENTO PARA A LINHA TR
//CIAR OS ELEMENTOS DAS CELULAR TD
//DENTRO DOS TD É NECESSARIO ADICIONAR O CONTEUDO TEXTUAL
//AO FINAL ADICIONAR A LINHA DENTRO DA TABELA

var txtTarefa  = document.querySelector('#txtTarefa');
var btnAdicionar  = document.querySelector('#btnAdicionar');
var spnMensagem = document.querySelector('#spnMensagem');
var tblTarefas = document.querySelector('#tblTarefas tbody');
var tarefas = [];//criando uma variavel tipo array


console.log(tarefas);

btnAdicionar.onclick = function(){
    
    spnMensagem.innerHTML = '';//limpa o valor dentro do html

    var tarefa = txtTarefa.value.trim();//pega o texto e tira os espaços inuteis

    if( tarefa == ''){
      var textMensagem = document.createTextNode('Por favor, preencha o campo!');//cria o texto
      spnMensagem.appendChild(textMensagem);
    }else{
        var objeto={
            Codigo:0,
            Tarefa: tarefa
        };
        tarefas.push(objeto);
        reinderizarTabela();
    }
};

 
function reinderizarTabela(){
    //foreach percorre todos itens do array 
        for(t  of tarefas ){
            console.log(t.Tarefa);//elemento.atributo
        }
}

   /*
//criando elementos da tabela
    var linha = document.createElement('tr');
    var celulaCodigo = document.createElement('td');
    var celulaConteudo = document.createElement('td');  
    var celulaRemover = document.createElement('td');

//adicionando conteudo dentro da
    celulaConteudo.appendChild(document.createTextNode(objeto.Tarefa));
    celulaCodigo.appendChild(document.createTextNode(objeto.Codigo));

//adicionando celulas na linha
    linha.appendChild(celulaCodigo);
    linha.appendChild(celulaConteudo);
    linha.appendChild(celulaRemover);

//adicionando a linha na tabela
    tblTarefas.appendChild(linha);
    */