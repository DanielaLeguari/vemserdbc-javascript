
const medalhas = [
    {
        primeiroLugar: ' Ouro',
        segundoLugar: ' Prata',
        terceiroLugar: ' Bronze',
        quartoLugar: 'Não recebe medalha',
        quintoLugar: 'Não recebe medalha'
    }
];

const ouro = medalhas
    .map(m => m.primeiroLugar)
document.getElementById('ouro').innerHTML = ouro;

const prata = medalhas
    .map(m => m.segundoLugar)
document.getElementById('prata').innerHTML = prata;

const bronze = medalhas
    .map(m => m.terceiroLugar)
document.getElementById('bronze').innerHTML = bronze;

const semMedalha = medalhas
    .map(m => m.quartoLugar)
document.getElementById('semmedalha').innerHTML = semMedalha;

const semMedalha2 = medalhas
    .map(m => m.quintoLugar)
document.getElementById('semmedalha2').innerHTML = semMedalha2;
