
const exibeCharada1 = async () => {
    setTimeout(() => {
        document.getElementById('charada-1').innerText = 'Uma impressora disse para a outra.';

    }, 2000);

    setTimeout(() => {
        document.getElementById('resposta-1').innerText = 'Essa folha é tua ou é impressão minha?';

    }, 8000);
}
exibeCharada1();


const exibeCharada2 = async () => {
    let charada2 = new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById('charada-2').innerText = 'Quanto mais se tira mais se aumenta.';

        }, 10000);

        setTimeout(() => {
            document.getElementById('resposta-2').innerText = 'O buraco.';

        }, 18000);
    });
    await charada2;
}
exibeCharada2();