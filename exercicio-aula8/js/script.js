//exercício 1


function dobraValor(num) {
    document.getElementById('ex1').innerText = '...';
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                document.getElementById('ex1').innerText = `${num * 2}`);
        }, 4000);
    })
}

function mostraResultado() {
    const valorInput = document.getElementById('numero').value;
    dobraValor(valorInput);
}


//exercício 2

function funcaoAssincrona(n) {
    let a = 1;
    let b = 2;
    let c = 3;

}


//exercicio 3

const exibeConversa = async () => {
    let container = document.getElementById('atv-3');
    setTimeout(() => {
        container.innerHTML = '<div class="row"> Olá... </div>';
    }, 2000);

    setTimeout(() => {
        container.innerHTML += '<div class="row ps-3"> Tudo bem? </div>';
    }, 4000);
    setTimeout(() => {
        container.innerHTML += '<div class="row"> Meu nome é Pafúncio, e o seu? </div>';
    }, 6000);

    setTimeout(() => {
        container.innerHTML += '<div class="row ps-3"> Meu nome é Clarabela. Onde você mora?  </div>';
    }, 8000);
}















