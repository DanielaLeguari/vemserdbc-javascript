
function anoBissexto(ano) {
    return ano % 400 == 0 ? `É bissexto!` : (ano % 4 == 0 && ano % 100 != 0 ? `É bissexto` : `Não é bissexto!`);
}

var ano = parseInt(prompt('Digite um ano:'));
alert(anoBissexto(ano));