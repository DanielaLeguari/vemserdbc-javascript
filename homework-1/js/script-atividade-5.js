//Atividade 5

//var numero = prompt('Digite um número em segundos:');

var numero = 200000;

function converte(numeroSegundos) {
    let dia = (numeroSegundos / 86400) - ((numeroSegundos % 86400) / 86400), // 86400 -> 60 segundos * 60 minutos * 24 horas
        hora =  ((numeroSegundos % 86400) / 3600) - ((numeroSegundos % 3600) / 3600) , //3600-> 60 segundos * 60 minutos
        minuto = ((numeroSegundos % 3600) / 60) - ((numeroSegundos % 60) / 60),
        segundo = ((numeroSegundos % 60));

  alert(`${dia} dias , ${hora} horas, ${minuto} minutos, ${segundo} segundos`);

}

converte(numero);