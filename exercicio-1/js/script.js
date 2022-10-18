//Algoritmo 1 
//Calculo da média aritmética entre dois números

function calculaMedia(numero1, numero2) {
    let media = (numero1 + numero2) / 2;
    return media;
}
//Resolução 1
//document.getElementById('media').innerText = `A média é: ${calculaMedia(50, 100)} `;

//Resolução 2
alert(calculaMedia(100, 50));



// Algoritmo 2
//Calcular o dobro de um valor

var numero = prompt('Digite um numero:');
numero = Number(numero);

function calculaDobro(numero) {
    return numero * 2;
}

alert(`O dobro de ${numero} é ${calculaDobro(numero)}`);

//Algoritmo 3
//Concatena nome e sobrenome

var nome = 'Daniela';
var sobrenome = 'Holem Leguari';

function concatenaNomeSobrenome(nome, sobrenome) {
    return alert(`Meu nome é ${nome} ${sobrenome}`);

}

concatenaNomeSobrenome(nome, sobrenome);



//Algoritmo 4
//par e impar

var numeroParImpar = prompt('Digite um numero');
numeroParImpar  = Number(numeroParImpar );

function parImpar(numero) {
    numero % 2 == 0? alert('É par!'): alert('É ímpar!');
}

parImpar(numeroParImpar);

//Algoritmo 5
//Retorna texto

var texto = prompt('Digite uma frase para exibir na tela:');
function exibeFrase(frase) {
    return frase;
}

alert(texto);