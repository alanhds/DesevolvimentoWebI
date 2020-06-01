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


btnAdicionar.onclick = function(){
    if( txtTarefa.value.trim() == ''){
        spnMensagem.value = document.createTextNode("Por Favor preencha o campo!");
       // alert("Por Favor preencha o campo!");
    }else{

    }
};

