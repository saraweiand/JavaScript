/*
* EXERCÍCIO 3 (Adaptado): Sistema de Pedidos Simples
*
* OBJETIVO:
* - Criar um array de objetos 'pedidos' com 'id', 'itens' e 'status'.
* - Criar uma função 'exibirDetalhesPedido' que retorna uma string detalhada do pedido.
* - Criar uma função 'atualizarStatusPedido' que modifica o 'status' de um pedido e retorna uma confirmação.
* - Exibir status inicial, atualizar alguns pedidos e depois exibir o status final para verificar as mudanças.
*/

const pedidos = [
    {
        id: 1,
        itens: ['Garrafinha', 'Relógio', 'Capinha de celular'],
        status: 'Pendente'
    },
    {
        id: 2,
        itens: ['Livro', 'Caixa de óculos', 'Mouse'],
        status: 'Em processamento'
    },
    {
        id: 3,
        itens: ['Garrafa dágua', 'Carregador', 'Capinha de celular'],
        status: 'Entregue'
    },
]

// FORMATANDO O RETORNO DA STRING

function exibirDetalhesPedido(pedido){
    let pedidoFormatado = `ID: ${pedido.id} - Itens: ${pedido.itens.join(', ')} - Status: ${pedido.status}`

    return pedidoFormatado
}

// ALTERANDO A STRING E STATUS DO PEDIDO

let novoStatus = "Em processamento"

function atualizarStatusPedido(pedidoParaAtualizar, novoStatus){
    pedidoParaAtualizar.status = novoStatus
    let novoStatusString = `Pedido ${pedidoParaAtualizar.id} atualizado para: ${novoStatus}`

    return novoStatusString
}

console.log("--- Status Inicial dos Pedidos ---");
for(const pedido of pedidos){
    console.log(exibirDetalhesPedido(pedido))
}

console.log("\n--- Atualizando Status de Pedidos ---");
console.log(atualizarStatusPedido(pedidos[0], "Em processamento"));
console.log(atualizarStatusPedido(pedidos[2], "Em processamento"));

console.log("\n--- Status Final dos Pedidos ---");
for (const pedido of pedidos) { 
    console.log(exibirDetalhesPedido(pedido));
}