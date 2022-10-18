//Atividade 3

function sim () {
    alert('Parabéns!');
}

function nao() {
   let novoTexto = prompt('Digite outro texto:');
    alert(novoTexto);
}

function outraString(){
    confirm('Você tem noções dos seus atos?');
}

var texto = prompt('Digite um texto:');
texto === 'SIM'? sim():(texto === 'Não'? nao():outraString());