class Produto {
    constructor(titulo, preco, descricao, categoria, imagem, quantidade) {
        this.titulo = titulo;
        this.preco = preco;
        this.descricao = descricao;
        this.categoria = categoria;
        this.imagem = imagem;
        this.quantidade = quantidade;
    }
}

const produtos = [];

fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
        json.forEach(item => {
            const produto = new Produto(
                item.title,
                item.price,
                item.description,
                item.category,
                item.image,
                item.rating.count
            );
            produtos.push(produto);
        });

        atualizarHtml(); // Chama a função para atualizar o HTML após receber os dados
    })
    .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
    });

function atualizarHtml() {
    const container = document.getElementById('produtos-container'); // Obtém o elemento do container onde os produtos serão exibidos

    // Limpa o conteúdo anterior do container
    container.innerHTML = '';

    // Itera sobre a lista de produtos e cria elementos HTML para cada um
    produtos.forEach(produto => {
        // Cria o elemento de produto
        const produtoElement = document.createElement('div');
        produtoElement.classList.add('produto');

        // Cria elementos para exibir informações do produto
        const tituloElement = document.createElement('h3');
        tituloElement.textContent = produto.titulo;

        const precoElement = document.createElement('p');
        precoElement.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`; // Formata o preço para duas casas decimais

        const descricaoElement = document.createElement('p');
        descricaoElement.textContent = produto.descricao;

        const categoriaElement = document.createElement('p');
        categoriaElement.textContent = `Categoria: ${produto.categoria}`;

        const imagemElement = document.createElement('img');
        imagemElement.src = produto.imagem;
        imagemElement.alt = produto.titulo;

        const quantidadeElement = document.createElement('p');
        quantidadeElement.textContent = `Quantidade: ${produto.quantidade}`;

        // Adiciona os elementos criados ao elemento do produto
        produtoElement.appendChild(tituloElement);
        produtoElement.appendChild(precoElement);
        produtoElement.appendChild(descricaoElement);
        produtoElement.appendChild(categoriaElement);
        produtoElement.appendChild(imagemElement);
        produtoElement.appendChild(quantidadeElement);

        // Adiciona o elemento do produto ao container
        container.appendChild(produtoElement);
    });
}
