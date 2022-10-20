//exercicio 1
const calcularMedia = () => {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('resultado').innerText = 'Você digitou valores inválidos!';
        return;
    }
    if ((nota1 < 0 || nota2 < 0 || nota3 < 0) || (nota1 > 10 || nota2 > 10 || nota3 > 10)) {
        document.getElementById('resultado').innerText = 'Você digitou valores inválidos!';
        return;
    }
    let media = (nota1 + nota2 + nota3) / 3;
    media = media.toFixed(2);
    if (media < 5) {
        document.getElementById('resultado').innerText = `A média é ${media}, você está REPROVADO!`;
    } else if (media >= 5 && media < 7) {
        document.getElementById('resultado').innerText = `A média é ${media}, você está em RECUPERAÇÃO!`;
    } else {
        document.getElementById('resultado').innerText = `A média é ${media}, PARABÉNS! Você está APROVADO!`;
    }

}
//exercicio 2
const calculaSoma = () => {

    let numero = Number(document.getElementById('numero').value);
    let somaNumerosPares = 0;
    let contaPares = 0;
    while (contaPares < 50) {
        if (numero % 2 == 0) {
            somaNumerosPares += numero;
            contaPares++;
        }
        numero += 1;
    }

    document.getElementById('mostrasoma').innerText = `A soma é ${somaNumerosPares}`;

}

// exercicio 3



// exercicio 4
const escolhaOpcaoMenu = () => {
    let opcao = prompt('Escolha uma opção do Menu:\n 1-Fazer checkin  \n2-Fazer checkout \n3-Estender hospedagem \n4-Sair');
    if (opcao == "1") {
        alert('Bem-vindo!');
    } else if (opcao == '2') {
        if (confirm('Tem certeza em fazer checkout?')) {
            alert('Até a próxima!');
        }
    } else if (opcao == "3") {
        let qtdDias = prompt('Quantos dias gostaria de estender?');
        if (!isNaN(qtdDias) && Number(qtdDias) > 0) {
            alert(`A hospedagem foi estendida em ${qtdDias} dias.`);
        }
    } else if (opcao == "4") {
        alert('OK');
    } else {
        alert('Opção inválida!');
    }

}
//exercicio 5

const retornaQtdCarbono = () => {
    let qtdSubstancia1 = parseFloat(prompt('Digite a quantidade de carbono da primeira substancia: '));
    let qtdSubstancia2 = parseFloat(prompt('Digite a quantidade de carbono da segunda substancia: '));
    qtdSubstancia2 += 2;

    if (!isNaN(qtdSubstancia1) && !isNaN(qtdSubstancia2)) {
        if (qtdSubstancia1 == qtdSubstancia2) {
            alert(' A quantidade de carbono das substancias são iguais!');
            alert(`Substancia 1 : ${qtdSubstancia1}, substancia 2: ${qtdSubstancia2}`);
        } else {
            alert(`Quantidade de carbono da substancia um é ${qtdSubstancia1} e a quantidade de carbono da substancia dois é ${qtdSubstancia2}.`);
        }
    } else{
        alert('Você digitou dados inválidos!');
    }

}

//exercicio 6
const contaPares = () => {

    let pares = '';
    let numero = 0;
    while (numero <= 100) {
        if (numero % 2 == 0) {
            pares += numero + '\n';
        }
        numero += 1;
    }
    pares += 'FIM';

    document.getElementById('pares').innerText = pares;

}


//exercicio 7
const mostraIdade = () =>{
    let idade = parseFloat(prompt("Digite sua idade:"));

    while(isNaN(idade)){
        idade = parseFloat(prompt("Digite sua idade:"));
    }
    alert(`Sua idade é ${idade}`);
}


//exercicio 8

const aumentoSalarial = () => {
    let anoInicial = 2013;
    let salarioInicial = 1000;
    let anoAtual = 2022;
    let aumentoSalarialPercentual = 1.5;
    let percentualSalario = 0;

    while (anoInicial <= anoAtual) {
        if (anoInicial <= 2016) {
            percentualSalario = (salarioInicial * aumentoSalarialPercentual);
            salarioInicial = salarioInicial + percentualSalario;
        }
        anoInicial++;

    }
}

//exercicio 9
const mostraFibonacci = () => {
    let numero1 = 0;
    let numero2 = 1;
    let numero3 = 0;
    let resultado = '';
    let contador = 0;

    while (contador <= 20) {
        resultado += numero3 + ', ';
        numero1 = numero2;
        numero2 = numero3;
        numero3 = numero1 + numero2;
        contador++;
    }

    document.getElementById('fibonacci').innerText = resultado;
}
