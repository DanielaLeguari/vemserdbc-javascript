
const usuario = 'adm';
const email = 'teste@gmail.com';
const senha = '123';

function recebeNome() {
    let erroNome = document.getElementById('erroNome');
    erroNome.innerText = '';
    let usuarioDigitado = document.getElementById('inputNome').value;
    try {
        if (usuarioDigitado == '') throw 'O campo nome não pode ser vazio';
        if (usuarioDigitado !== usuario) throw 'Você digitou um usuario inválido';
    } catch (err) {
        erroNome.innerText = err;
        return false;

    }
    return true;
}

function recebeEmail() {
    let erroEmail = document.getElementById('erroEmail');
    let emailDigitado = document.getElementById('inputEmail').value;
    erroEmail.innerText = '';
    try {
        if (emailDigitado == '') throw 'O campo e-mail não pode ser vazio';
        if (emailDigitado !== email) throw 'Você digitou um e-mail inválido';
    } catch (err) {
        erroEmail.innerText = err;
        return false;

    }
    return true;
}

function recebeSenha() {
    let senhaDigitada = document.getElementById('inputSenha').value;
    let erroSenha = document.getElementById('erroSenha');
    erroSenha.innerText = '';
    try {
        if (senhaDigitada == '') throw 'O campo senha não pode ser vazio';
        if (senhaDigitada !== senha) throw 'Senha incorreta, digite novamente'
    } catch (err) {
        erroSenha.innerText = err;
        return false;
    }
    return true;
}

function enviarDados() {
    const isNomeValido = recebeNome();
    const isEmailValido = recebeEmail();
    const isSenhaValida = recebeSenha();

    if (isNomeValido && isEmailValido && isSenhaValida) {
        alert('Você logou!');
    }
}
