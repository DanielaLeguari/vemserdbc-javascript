
//Atividade 4

var nomeUsuario = prompt('Digite o nome do cliente:');
nomeUsuario = nomeUsuario;
var nomeCliente = prompt('Digite o nome do atendente:');
nomeCliente = nomeCliente;

function exibeMensagem(cliente, atendente){
   return `Olá ${cliente} eu me chamo ${atendente}, em que posso ajudar? `;
}

alert(exibeMensagem(nomeCliente, nomeUsuario));