//obter o valor do parametro da url: ?post_id=0
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("post_id");

let comentarios = [];


// página postar comentário
const lerComentario = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    comentarios = await response.json();

    let containerComentarios = document.getElementById('comentarios');

    if (comentarios.length === 0) {
        containerComentarios.innerHTML = constroiComentarioVazio();
        return;
    }

    const htmlComentarios = comentarios.map(comentario => constroiComentario(comentario)).join('\n');
    // Atribuo no container
    containerComentarios.innerHTML = htmlComentarios;
}


const postaComentario = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        //copiei do guia
        {
            method: 'POST',
            body: JSON.stringify({
                postId: postId,
                name: document.querySelector('#nome').value,
                email: document.querySelector('#email').value,
                body: document.querySelector('#postarComentario').value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    let containerComentarios = document.getElementById('comentarios');

    //se a API gravasse o comentário bastava chamar a lerComentario() para atualizar os comentários.
    if (comentarios.length == 0) {
        //sobescreve a mensagem de 'Nenhum comentário encontrado'
        containerComentarios.innerHTML = constroiComentario(await response.json());
    } else {
        //concatena no final o novo comentário
        containerComentarios.innerHTML += constroiComentario(await response.json());
    }

}

//constroi box comentário vazio
const constroiComentarioVazio = () => {
    return `
    <div class="bg-light p-5 rounded mb-3">
        <h1>Nenhum comentário encontrado.</h1>
     </div>
`;
}

//constroi o box com um novo objeto comentário
// {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   }
const constroiComentario = (comentario) => {
    return `
    <div class="bg-light p-5 rounded mb-3">
        <h5>${comentario.name}</h5>
        <label>${comentario.email}</label>
        <p>${comentario.body}</p>
    </div>`;
}

lerComentario();
