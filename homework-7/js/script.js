// Função: ler todos os posts https://jsonplaceholder.typicode.com/posts
const lerTodosPosts = async () => {

    // Fetch: requisição para a API, retorna uma Response (resposta da requisição)
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    // A partir da response (resposta) converto ela para um objeto (JSON)
    let posts = await response.json();

    // Obtenho o elemento do container pelo id 'posts'
    let containerPosts = document.getElementById('posts');

    // Quando não houver posts retorno uma msg de vazio padrão
    if (posts.length === 0) {
        containerPosts.innerHTML = constroiPostVazio();
        return;
    }

    // Pega o array de posts e utiliza o map para 
    // transformar em um novo array convertendo para HTML
    const htmlPosts = posts.map(post => constroiPost(post)).join('\n');

    // Atribuo no container
    containerPosts.innerHTML = htmlPosts;
}

//mensagem quando não houver posts
const constroiPostVazio = () => {
    return `
    <div class="bg-light p-5 rounded">
        <h1>Nenhuma publicação encontrada.</h1>
     </div>
`;
}

// JSON do post
// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   } 
const constroiPost = (post) => {
    return `
    <div class="bg-light p-5 rounded mb-3">
        <h1>${post.title}</h1>
        <p class="lead">${post.body}</p>
        <a class="btn btn-lg btn-dark" href="./post.html?post_id=${post.id}" role="button">Ver comentários</a>
    </div>
`;
}

lerTodosPosts();



