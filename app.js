let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ; 
    
}

function mensagemInicial(){
exibirTextoNaTela ('h1', 'bem vindo ao jogo do mistério');
exibirTextoNaTela('p',`escolha um número entre 1 e ${numeroLimite}`);}
mensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute==numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let tentativa = tentativas>1?'tentativas':'tentativa';
        let mensagemTentativas = `você descobriu o numero secreto com ${tentativas} ${tentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

        } else 
            if(chute>numeroSecreto){
            exibirTextoNaTela('h1', 'Errou!')
            exibirTextoNaTela('p','O numero secreto é menor!')}
        
        else{
            exibirTextoNaTela('h1','Errou!')
            exibirTextoNaTela('p', 'numero secreto é maior!')
        }
        
        tentativas++;
        limparCampo();
}
    
    console.log(numeroSecreto);


function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random()*numeroLimite)+1;
   let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;
   if(quantidadeDeElementosDaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }


   if(listaDeNumerosSorteados.includes(numeroEscolhido));
   else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';}

    function reiniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        mensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled',true);
    }