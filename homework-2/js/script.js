// Exercício 1

function alterarTexto() {
    const texto = document.getElementById('alterartexto');
    texto.innerText = 'Texto alterado com sucesso!';
}

const btnAlteraTexto = document.querySelector('.altera-texto');
btnAlteraTexto.addEventListener('click', () => {
    alterarTexto();
});


// Exercício 2

let campoCor = document.querySelector('#corescolhida');
campoCor.addEventListener('change', () => {
    let corEscolhida = document.getElementById('corescolhida').value;
    document.querySelector('#cor').style.color = corEscolhida;
});




//Exercício 3
//adicionar + 1
function adicionaMaisUm() {
    let valor = parseInt(document.getElementById('adiciona').value);
    valor += 1;
    document.getElementById('adiciona').value = valor;
}

const btnAdicionaMaisUm = document.getElementById('adicionar');
btnAdicionaMaisUm.addEventListener('click', () => {
    adicionaMaisUm();
})

// resetar
function resetaContador() {
    let resetaContador = document.querySelector('#adiciona');
    console.log(resetaContador)
    resetaContador.value = 0;
}

//exercicio 4

const mudaFiltro1 = () => {
    let imagem = document.querySelector('#imagem');
    imagem.src = "./img/photo-2.png";
}

const mudaFiltro2 = () => {
    let imagem = document.querySelector('#imagem');
    imagem.src = "./img/photo-3.png";
}

const resetaFiltro = () => {
    let imagem = document.querySelector('#imagem');
    imagem.src = "./img/photo-1.jpeg";
}

//exercicio 5

const calcular = () => {
    let valor1 = Number(document.querySelector('#valor1').value);
    let valor2 = Number(document.querySelector('#valor2').value);
    let operacao = document.querySelector('#operacao').value;
    let resultado = 0;
    if (operacao == 'somar') {
        resultado = valor1 + valor2;
    } else if (operacao == 'subtrair') {
        resultado = valor1 - valor2;
    } else if (operacao == 'multiplicar') {
        resultado = valor1 * valor2;
    } else {
        resultado = valor1 / valor2;
    }
    document.querySelector('#resultado').value = resultado;

}

const limparCalculadora = () => {
    document.querySelector('#valor1').value = '';
    document.querySelector('#valor2').value = '';
    document.querySelector('#resultado').value = '';
}


//exercicio 6

const digitar = (valor) => {
    let visor = document.querySelector('#visor');
    visor.value += valor;
}

const apagar = () => {
    let visor = document.querySelector('#visor');
    while (true) {
        if (visor.value.length <= 1) {
            visor.value = '';
            break;
        }
        let ultimoCaractere = visor.value.substr(visor.value.length - 1, 1);
        if (ultimoCaractere == ' ') {
            visor.value = visor.value.substr(0, visor.value.length - 3);
            break;
        } else if (ultimoCaractere != ' ') {
            visor.value = visor.value.substr(0, visor.value.length - 1);
            break;
        }
    }
}

const limparVisor = () => {
    let visor = document.querySelector('#visor');
    visor.value = '';
}

const calcularResultado = () => {
    let visor = document.querySelector('#visor');
    visor.value = eval(visor.value);
}
