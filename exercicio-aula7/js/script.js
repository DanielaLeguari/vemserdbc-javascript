//exercicio 1
let listaNomes = ['Augusto', 'Maria', 'João', 'Clara'];
let listaNomes2 = ['Marcos', 'Joana', 'Aline', 'Alice'];
let listaNomes3 = [...listaNomes, ...listaNomes2];

let btnEx1 = document.querySelector('#btnEx1');
btnEx1.addEventListener('click', () => {
    document.getElementById('ex1').innerText = `Lista completa de nomes: ${listaNomes3.join(', ')}`
});

//exercicio 2

let listaFrutas = ['Melancia', 'banana', 'maçã', 'pêra'];
let listaValores = [3.50, 4, 6, 7.50];
let juntaFrutaValores = [...listaFrutas, ...listaValores];

let btnEx2 = document.querySelector('#btnEx2');
btnEx2.addEventListener('click', () => {
    document.getElementById('ex2').innerText = `Junção dos arrays de tipos diferentes: ${juntaFrutaValores.join(', ')}`;
});

//exercicio 3

let livros = [
    {
        nome: 'As Crônicas de Narnia',
        numeroPagina: 751,
        autor: 'C. S. Lewis',
        genero: 'Literatura infanto Juvenil',
        valor: 50.50
    },
    {
        nome: 'O simbolo Perdido',
        numeroPagina: 480,
        autor: 'Dan Brown',
        genero: 'Ficção',
        valor: 30.50
    }];

function valorTotalLivros() {
    return livros.map(livro => livro.valor).reduce((livroA, livroB) => livroA + livroB, 0);
}

let btnEx3 = document.querySelector('#btnEx3');
btnEx3.addEventListener('click', () => {
    document.getElementById('ex3').innerText = `O valor total é: R$${valorTotalLivros()}`;
});


// exercicio 4
let listaLivros = [
    {
        nome: 'As Crônicas de Narnia',
        autor: 'C. S. Lewis',
        categoria: 'Literatura infanto Juvenil',
        preco: 50.50
    },
    {
        nome: 'O simbolo Perdido',
        autor: 'Dan Brown',
        categoria: 'Ficção',
        preco: 30.50
    },
    {
        nome: 'Iracema',
        autor: 'Jose de Alencar',
        categoria: 'Literatura brasileira',
        preco: 15
    },
    {
        nome: 'A Pata Gazela',
        autor: 'Jose de Alencar',
        categoria: 'Literatura brasileira',
        preco: 20.50
    },
    {
        nome: 'Cinco Minutos e Viuvinha',
        autor: 'Jose de Alencar',
        categoria: 'Literatura brasileira',
        preco: 10
    }
];


function cadastrarLivro() {
    let titulo = document.getElementById('titulo').value;
    let categoria = document.getElementById('categoria').value;
    let autor = document.getElementById('autor').value;
    let preco = document.getElementById('preco').value;

    listaLivros.push({
        nome: titulo,
        autor: autor,
        categoria: categoria,
        preco: preco
    });

    exibeLivros(listaLivros);
}
function exibeLivros(listaLivros) {
    let consulta = document.getElementById('consulta');
    if(listaLivros.length === 0){
        consulta.innerHTML = `<div class="row">Nenhum livro encontrado.</div>`;
        return;
    }
    consulta.innerHTML = listaLivros.map(livro => {
        return `
        <div class="row">
        <h5>${livro.nome}</h5>
        <p>Autor: ${livro.autor}</p>
        <p>Categoria: ${livro.categoria}</p>
        <p>Preço: R$ ${livro.preco}</p>
        </div>
        `;
    }).join('\n');
}

function pesquisarLivro() {
    let pesquisa = document.getElementById('pesquisa').value;
    exibeLivros(listaLivros.filter(livro => livro.nome.toLowerCase().includes(pesquisa.toLowerCase())));
}

exibeLivros(listaLivros);