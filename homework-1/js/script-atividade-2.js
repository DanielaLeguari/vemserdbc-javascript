//Atividade 2
var numero1= prompt('Digite o primeiro número:'); //entrada
numero1 = Number(numero1);
var numero2= prompt('Digite o segundo número:'); //entrada
numero2 = Number(numero2);

function somaNumeros(numero1, numero2) {
    return numero1 + numero2;
}

alert(`A soma de ${numero1} com ${numero2} é ${somaNumeros(numero1, numero2)}`);