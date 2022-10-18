//atividade 10

var ano = prompt('Digite um ano:');
ano = Number(ano);

function mediaFilhos(anoAtual) {
    let anosPassaram = anoAtual - 1500;
    let media = anosPassaram / 28;
    return `Se passaram ${media} gerações!`;
}

alert(mediaFilhos(ano));