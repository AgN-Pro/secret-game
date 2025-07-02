let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAletorio();
let attempts = 1

function exibirTextoNaTela (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'UK English Female',{rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Secret Number Game');
    exibirTextoNaTela('p','Choose a number between 1 and 10!')
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Got it right!');

        let palavraTentativa = attempts > 1 ? 'attempts' : 'attempt';
        let mensagemTentativas = `You discovered the secret number with ${attempts} ${palavraTentativa}`;

        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Secret number is smaller');
        } else {
            exibirTextoNaTela('p', 'Secret number is bigger');
        }
        attempts++
    }
    //console.log('button was clicked!')
    //console.log(chute == numeroSecreto);
}

function gerarNumeroAletorio() {
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolido)) {
        return gerarNumeroAletorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAletorio();
    limparCampo();
    attempts = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}