var idade1 = prompt('Digite a idade 1:');
var idade2 = prompt('Digite a idade 2:');

function calculaDiferencaIdade(idade1, idade2) {
    let diferencaIdades = idade1 - idade2;
    return diferencaIdades < 0 ? `Nossa diferença de idade é: ${diferencaIdades * -1}` : `Nossa diferença de idade é: ${diferencaIdades}`;

}

alert(calculaDiferencaIdade(idade1, idade2));
