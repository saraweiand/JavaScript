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

function exibirDetalhesPedido(pedidos){
    const pedidoAtual = pedidos
    let pedidoFormatado = `ID: ${pedidoAtual.id} - Itens: ${pedidoAtual.itens.join(', ')} - Status: ${pedidoAtual.status}`

    return pedidoFormatado
}

let novoStatus = "Em processamento"

function atualizarStatusPedido(pedidoParaAtualizar, novoStatus){
    pedidoParaAtualizar.status = novoStatus
    let novoStatusString = `Pedido ${pedidoParaAtualizar.id} atualizado para: ${novoStatus}`

    return novoStatusString
}

const detalhesPedido = exibirDetalhesPedido(pedidos)

for(const pedidoAntesDaAlteracao of detalhesPedido){
    const stringAntes = exibirDetalhesPedido(pedidoAntesDaAlteracao)
    console.log(stringAntes)
}