let listaDeTarefas = [
    {
        id: 1,
        descricao: 'Caminhar com as gatas',
        prioridade: 'Alta',
        concluida: true
    },
    {
        id: 2,
        descricao: 'Limpas as janelas',
        prioridade: 'Baixa',
        concluida: false
    },
    {
        id: 3,
        descricao: 'Estudar Node.js',
        prioridade: 'Média',
        concluida: false
    },
]

function mostrarDetalhesTarefa(tarefa){
    let stringTarefa = `Tarefa ${tarefa.id} - ${tarefa.descricao} (Prioridade: ${tarefa.prioridade}, Concluída: ${tarefa.concluida})`
    return stringTarefa
}

function marcarTarefaComoConcluida(tarefa, statusConclusao){
    let alterarStatus = statusConclusao.concluida
    let stringTarefaAlterada = `Tarefa ${tarefa.id} agora está ${tarefa.concluida}."`
    return stringTarefaAlterada
}