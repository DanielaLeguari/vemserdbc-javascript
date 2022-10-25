//exercício 1
async function exibeMensagem() {
    let mensagem = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Sua conexão falhou! Tente reconectar novamente!');
        }, 3000);
    });
    alert(await mensagem);
}
let btnMensagem = document.querySelector('#btnMensagem');
btnMensagem.addEventListener('click', () => {
    exibeMensagem();
});

//exercício 2
let intervaloExibeRelogio = null;
async function exibeRelogio() {
    intervaloExibeRelogio = setInterval(() => {
        let data = new Date();
        let hora = data.getHours();
        let minutos = data.getMinutes();
        let segundos = data.getSeconds();
        document.getElementById('txtRelogio').innerText = (`${hora}:${minutos}:${segundos}`);
    }, 1000);
}

let btnVerHora = document.querySelector('#btnHora');
btnVerHora.addEventListener('click', () => {
    exibeRelogio();
})

function resetarRelogio() {
    clearInterval(intervaloExibeRelogio);
    document.getElementById('txtRelogio').innerText = (`00:00:00`);
}

let resetaHora = document.querySelector('#resetaHora');
resetaHora.addEventListener('click', () => {
    resetarRelogio();
})

//exercício 3
const listaCores = ['#154c79', '#e28743', '#6bfc03', '#b53c54', '#8257ab', '#c24891', '#a2c267', '#3aafb5'];
let corAtual = 0;
let intervalTrocaCor;
function iniciarTroca() {
    intervalTrocaCor = setInterval(() => {
        let trocaCor = document.querySelector('#txtTrocaCor');
        trocaCor.style.color = listaCores[corAtual];
        if (corAtual > listaCores.length) {
            corAtual = 0;
        } else {
            corAtual++;
        }

    }, 2000)
}
const btnTrocaCor = document.querySelector('#btnTrocaCor');
btnTrocaCor.addEventListener('click', () => {
    iniciarTroca();
})

function pararTroca() {
    clearInterval(intervalTrocaCor);
}

const btnPararTroca = document.querySelector('#btnPararTroca');
btnPararTroca.addEventListener('click', () => {
    pararTroca();
});

//exercício 4
let listaNomes = [];
const adicionarNomeArray = () => {
    let erroSorteio = document.getElementById('erroSorteio');
    erroSorteio.innerText = '';
    try {
        let nome = document.querySelector('#nome');
        if (nome.value == '') {
            throw 'Digite um nome válido';
        }
        listaNomes.push(nome.value);
        nome.value = '';

        //console.log(listaNomes);
    } catch (err) {
        erroSorteio.innerText = err;
    }
}
let btnAdicionarNome = document.querySelector('#btnAdicionarNome');
btnAdicionarNome.addEventListener('click', () => {
    adicionarNomeArray();

});

const sortear = async () => {
    let erroSorteio = document.getElementById('erroSorteio');
    erroSorteio.innerText = '';
    try {
        let velocidade = document.getElementById('velocidade').value;
        let tempo = document.getElementById('tempo').value;

        if (velocidade == '' || isNaN(velocidade) || parseInt(velocidade) < 0) {
            throw 'Informe uma velocidade válida';
        } else if (tempo == '' || isNaN(tempo) || parseInt(tempo) < 0) {
            throw 'Informe um tempo válido';
        } else if (listaNomes.length == 0) {
            throw 'Adicione nomes na lista para o sorteio';
        }
        let posicaoNome = 0;
        let interval = setInterval(() => {
            if (posicaoNome >= listaNomes.length - 1) {
                posicaoNome = 0;
            } else {
                posicaoNome++;
            }
            // console.log(`intervalo ${listaNomes[posicaoNome]}`);
        }, velocidade);
        setTimeout(() => {
            clearInterval(interval);
            document.getElementById('resultadoSorteio').innerText = `Resultado do sorteio: ${listaNomes[posicaoNome]}`;
        }, tempo);
    } catch (err) {
        erroSorteio.innerText = err;
    }
}

let btnSorteio = document.querySelector('#btnSorteio');
btnSorteio.addEventListener('click', () => {
    sortear();

});
