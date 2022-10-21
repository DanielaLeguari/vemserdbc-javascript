
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

//exercício 4
const game = () => {
    const game = [{
        idade: 'Trevas',
        item: 'Ouro',
        sacas: 45
    }, {
        idade: 'Trevas',
        item: 'Prata',
        sacas: 56
    }, {
        idade: 'Trevas',
        item: 'Madeira',
        sacas: 236
    }, {
        idade: 'Trevas',
        item: 'Pedra',
        sacas: 458
    }, {
        idade: 'Castelos',
        item: 'Ouro',
        sacas: 345
    }, {
        idade: 'Castelos',
        item: 'Prata',
        sacas: 568
    }, {
        idade: 'Castelos',
        item: 'Madeira',
        sacas: 789
    }, {
        idade: 'Castelos',
        item: 'Pedra',
        sacas: 897
    }
    ];

    let trevas = game.filter(item => item.idade == 'Trevas');
    document.getElementById('exercicio4').innerText = 'Objetos do meu inventário Idade das Trevas\n';
    trevas.forEach(jogo => {
        document.getElementById('exercicio4').innerText += `${jogo.item} => ${jogo.sacas} sacas \n`
    });

    let castelo = game.filter(item => item.idade == 'Castelos');
    document.getElementById('exercicio4').innerText += 'Objetos do meu inventário- Idade dos Castelos. \n';
    castelo.forEach(jogo => {
        document.getElementById('exercicio4').innerText += `${jogo.item} => ${jogo.sacas} sacas.\n`
    });

    let totalSacas = 0;
    trevas.forEach(jogo => totalSacas += jogo.sacas);

    document.getElementById('exercicio4').innerText += `Na "Idade das Trevas" o status do meu inventário é:\nTotal de ${trevas.length} tipos de itens com: ${totalSacas} sacas.`

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
    document.getElementById('queijos').innerText = `Cardápio de queijos: \n${queijos.join(', ')}\n\n`;
    queijos.push('Mascarpone', 'Ricota', 'Provolone');
    document.getElementById('queijos').innerText += `Lista Atualizada: \n${queijos.join(', ')}\n\n`;
    queijos = queijos.sort();
    document.getElementById('queijos').innerText += `Lista Atualizada em ordem alfabética: \n${queijos.join(', ')}\n\n`;
    queijos.unshift('Cottage');
    document.getElementById('queijos').innerText += `Lista Atualizada: \n${queijos.join(', ')}\n`;
}

//exercicio 06

const biblioteca = () => {
    const livros = [{
        id: 1,
        categoria: "Terror",
        titulo: "It"
    },
    {
        id: 2,
        categoria: "Terror",
        titulo: "O Exorcista"
    },
    {
        id: 3,
        categoria: "Terror",
        titulo: "Drácula"
    },
    {
        id: 4,
        categoria: "Romance",
        titulo: "O morro dos ventos Uivantes"
    },
    {
        id: 5,
        categoria: "Policial",
        titulo: "O silêncio dos Inocentes"
    },
    {
        id: 6,
        categoria: "Suspense",
        titulo: "Boneco de Neve"
    },
    {
        id: 7,
        categoria: "Suspense",
        titulo: "Bird Box"
    },
    {
        id: 8,
        categoria: "Romance",
        titulo: "Orgulho e Preconceito"
    }
    ];

    const tituloLivros = livros
        .map(livro => livro.titulo);
    document.getElementById('exercicio6').innerText = `O catálogo é composto por: \n${tituloLivros.join(', ')}.\n\n`;

    const categoriaTerror = livros
        .filter(livro => livro.categoria == "Terror").map(livro => livro.titulo);
    document.getElementById('exercicio6').innerText += `Catálogo da categoria de terror: \n${categoriaTerror.join(', ')}.`;

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

//Exercicio 8
const conjuntos = () => {
    const conjuntoA = [2, 4, 6, 7, 8, 22, 45, 34, 89, 75, 62, 54];
    const conjuntoB = [22, 23, 57, 45, 77, 62, 56, 54, 97, 88, 33, 5];
    let uniao = [];

    uniao = uniao.concat(conjuntoB);

    for (let i = 0; i < conjuntoA.length; i++) {
        //indexOf retorna -1 quando não encontrar o elemento
        const posicaoElemento = uniao.indexOf(conjuntoA[i]);
        const encontrouElemento = posicaoElemento >= 0;
        if (!encontrouElemento) {
            uniao.push(conjuntoA[i]);
        }
    }

    document.getElementById('exercicio8').innerText = `A união dos conjuntos é \n${uniao.sort(((a, b) => a > b ? 1 : -1)).join(', ')}\n\n`;

    let intersecao = [];
    for (let i = 0; i < conjuntoB.length; i++) {
        for (let j = 0; j < conjuntoA.length; j++) {
            if (conjuntoB[i] === conjuntoA[j]) {
                intersecao.push(conjuntoB[i]);
            }
        }
    }

    document.getElementById('exercicio8').innerText += `A interseção é \n${intersecao.join(', ')}\n\n`;

    let diferenca = [];
    for (let i = 0; i < conjuntoB.length; i++) {
        let encontrou = false;
        for (let j = 0; j < conjuntoA.length; j++) {
            if (conjuntoB[i] === conjuntoA[j]) {
                encontrou = true;
            }
        }
        if (!encontrou) {
            diferenca.push(conjuntoB[i]);
        }
    }

    document.getElementById('exercicio8').innerText += `A diferença é \n${diferenca.sort(((a, b) => a > b ? 1 : -1)).join(', ')}`;
}

//Exercicio 9

const listaPedidos = () => {

    const pedidosDoDia = [{
        identificacaoPedido: 'pizza',
        produto: "Pizza Calabresa",
        cliente: "Claudino"
    },
    {
        identificacaoPedido: 'pizza',
        produto: "Pizza Mafiosa",
        cliente: "Maribela"
    },
    {
        identificacaoPedido: 'pizza',
        produto: "Pizza Calabresa",
        cliente: "Pafuncio"
    },
    {
        identificacaoPedido: 'pizza',
        produto: "Pizza Mussarela",
        cliente: "Maribela"
    },
    {
        identificacaoPedido: 'pizza',
        produto: "Pizza Quatro Queijos",
        cliente: "Olimpo"
    },
    {
        identificacaoPedido: 'pizza',
        produto: "Pizza Mussarela",
        cliente: "Jacinto"
    },
    {
        identificacaoPedido: 'pizza',
        produto: "Pizza Quatro Queijos",
        cliente: "Pafuncio"
    },
    {
        identificacaoPedido: 'pizza',
        produto: "Pizza Quatro Queijos",
        cliente: "Felisberta"
    },
    {
        identificacaoPedido: 'bebida',
        produto: "refrigerante",
        cliente: "Claudino"
    },
    {
        identificacaoPedido: 'bebida',
        produto: "refrigerante",
        cliente: "Maribela"
    },
    {
        identificacaoPedido: 'bebida',
        produto: "refrigerante",
        cliente: "Jacinto"
    },
    {
        identificacaoPedido: 'bebida',
        produto: "refrigerante",
        cliente: "Olimpo"
    },
    {
        identificacaoPedido: 'bebida',
        produto: "suco",
        cliente: "Pafuncio"
    },
    {
        identificacaoPedido: 'bebida',
        produto: "suco",
        cliente: "Felisberta"
    },
    {
        identificacaoPedido: 'bebida',
        produto: "cerveja",
        cliente: "Pafuncio"
    },
    {
        identificacaoPedido: 'bebida',
        produto: "cerveja",
        cliente: "Felisberta"
    },
    ];

    let pedidosPizza = pedidosDoDia.filter(item => item.identificacaoPedido === 'pizza').map(pizza => pizza.produto);
    document.getElementById('exercicio9').innerText = `Pedidos de pizza de hoje:\n ${pedidosPizza.join(', ')}\n\n`;

    let clientesRefri = pedidosDoDia.filter(item => item.produto === 'refrigerante').map(bebida => bebida.cliente);
    document.getElementById('exercicio9').innerText += `Clientes que pediram refrigerante: \n${clientesRefri.join(', ')}\n`;

    let clientesSuco = pedidosDoDia.filter(item => item.produto === 'suco').map(bebida => bebida.cliente);
    document.getElementById('exercicio9').innerText += `Clientes que pediram suco: \n${clientesSuco.join(', ')}\n\n`;

    let clientesCerveja = pedidosDoDia.filter(item => item.produto === 'cerveja').map(bebida => bebida.cliente);
    document.getElementById('exercicio9').innerText += `Clientes que pediram cerveja: \n${clientesCerveja.join(', ')}\n`;
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


