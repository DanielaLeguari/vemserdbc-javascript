//atividade 8

var numero1 = prompt('Digite o número 1:');
var numero2 = prompt('Digite o número 2:');
var operacao = prompt('Digite a operação:');

(isNaN(numero1) || isNaN(numero2) 
    ? alert('Digite um número válido!') 
    : validaOperacao(numero1, numero2, operacao));

function validaOperacao(numero1, numero2, operacao) {
    (operacao == '+' || operacao == '-' || operacao == '*' || operacao == '/' 
        ? validaDivisaoZero(numero1, numero2, operacao) 
        : alert('Operacão inválida!'));
}

function validaDivisaoZero(numero1, numero2, operacao) {
    numero2 == 0 
        ? alert('Não é possível dividir por zero!') 
        : calcula(numero1, numero2, operacao); 
}

function calcula(numero1, numero2, operacao) {

    let soma = numero1 + numero2;
    let divisao = numero1 / numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;

    alert(operacao == '+' ? soma 
        : (operacao == '-' ? subtracao 
        : (operacao == '*' ? multiplicacao : divisao)));

}




