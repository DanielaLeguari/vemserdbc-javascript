
//Exercicio 01

const exibeArrayCrescente = () => {

    const numeros = [14, 2, 30, 41, 5, 65, 17, 28, 99, 10];
    let numeros2 = numeros.sort((a, b) => a > b ? 1 : -1);
    document.getElementById('arraynumeros').innerText = numeros2.join(', ');
}

//Exercício 02

const mostraPares = () => {
    const colecao = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 23, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    for (let i = 1; i < colecao.length; i++) {
        if (colecao[i] % 2 == 0) {
            document.getElementById("saida").innerText += `Os num pares da lista são: ${colecao[i]} e possuem o indice ${i}\n`
        }

    }
}

// exercicio 03
const alteraArray = () => {
    let lista1 = ['banana', 'maça', 'pera', 'uva', 'abacate', 'melancia', 'laranja', 'mamão'];
    document.getElementById('lista1').innerText += 'Lista de valores 1: ' + lista1.join(', ');
    lista1[0] = 'cenoura';
    lista1[2] = 'alface';
    lista1[5] = 'cenoura';
    document.getElementById('lista1').innerText += '\nLista de valores 2: ' + lista1.join(', ');
}

// exercicio 5
const cardapio = () => {
    let queijos = ['Mussarela', 'Minas', 'Parmesão', 'Prato', 'Gorgonzola'];
    document.getElementById('queijos').innerText = `Cardápio de queijos: ${queijos.join(', ')}\n`;
    queijos.push('Mascarpone', 'Ricota', 'Provolone');
    document.getElementById('queijos').innerText += `Lista Atualizada: ${queijos.join(', ')}\n`;
    queijos = queijos.sort();
    document.getElementById('queijos').innerText += `Lista Atualizada em ordem alfabética: ${queijos.join(', ')}\n`;
    queijos.unshift('Cottage');
    document.getElementById('queijos').innerText += `Lista Atualizada: ${queijos.join(', ')}\n`;
}


//exercicio 07

const mostraMedalha = () => {
    const tiposMedalha = ['Ouro', 'Prata', 'Bronze'];
    let campeonato = [];
    tiposMedalha.forEach(tipo => campeonato.push('Medalha de: ' + tipo));
    campeonato.push('Medalha de: Sem Medalha', 'Medalha de: Sem Medalha');
    campeonato.forEach((valor, indice) => {
        document.getElementById('exercicio7').innerText += `Posição no campeonato: ${indice + 1}º lugar --> ${valor}\n`;
    });

}

//Exercicio 10

const exibeCompra = () => {
    const produtos = [{
        item: 'Perfume',
        valor: 1236.99
    },
    {
        item: 'Brinco',
        valor: 134.28
    },
    {
        item: 'Gravata',
        valor: 189.99
    },
    {
        item: 'Sapato',
        valor: 899.99
    },
    {
        item: 'Casaco',
        valor: 2568.78
    },
    {
        item: 'Terno',
        valor: 3566.99
    },
    {
        item: 'Vestido',
        valor: 4896.99
    }
    ];

    let total = 0;
    let nomes = '';

    for (let index = 0; index < produtos.length; index++) {
        nomes += `${produtos[index].item}, `;
        total += produtos[index].valor;
    }
    document.getElementById('exercicio10').innerText = `A compra de Samanta foi ${nomes} um item de cada que custou no total: R$ ${total}`;

}


