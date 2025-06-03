/*
* EXERCÍCIO 2: Catálogo de Produtos Simples
*
* OBJETIVO:
* - Criar um array de objetos 'produtos' com 'id', 'nome', 'preco' e 'disponivel'.
* - Criar uma função anônima 'listarProdutosDisponiveis' que filtra produtos com 'disponivel: true'.
* - Criar uma função 'formatarProduto' que retorna uma string formatada do produto.
* - Listar produtos disponíveis, formatá-los e exibi-los no console.
*/

let produtos = [
    {
        id: 1,
        nome: 'Caneta',
        preco: 3.75,
        disponivel: true,
    },
    {
        id: 2,
        nome: 'Tábua',
        preco: 20,
        disponivel: true,
    },
    {
        id: 3,
        nome: 'Lápis',
        preco: 1.50,
        disponivel: false,
    },
    {
        id: 4,
        nome: 'Garrafa',
        preco: 10.75,
        disponivel: true,
    },
]

// RETORNANDO OS PRODUTOS QUE ESTÃO DISPONÍVEIS

const listarProdutosDisponiveis = function(produtos){
    const produtosDisponivel = [] // array vazio para receber os objetos true

    for(const produtoAtual of produtos){
        if (produtoAtual.disponivel == true){ // não precisaria colocar ""== true"", pois boolean tem apenas true ou false
            produtosDisponivel.push(produtoAtual)
        }
    }

    return produtosDisponivel
}

// FORMATANDO O RETORNO DA STRING

function formatarProduto(produtos){
    const produtoAtual = produtos
    let produtoFormatado = `ID: ${produtoAtual.id} - Nome: ${produtoAtual.nome} - Preço: R$ ${produtoAtual.preco.toFixed(2)}`

    return produtoFormatado
} 

// IMPRIME O RESULTADO DOS PRODUTOS DISPONÍVEIS COM A STRING FORMATADA

const listaFiltrada = listarProdutosDisponiveis(produtos)

for(const produtoIndividual of listaFiltrada){
    const stringFormatada = formatarProduto(produtoIndividual)
    console.log(stringFormatada)
}