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
const calculaSoma= () => {

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
    


