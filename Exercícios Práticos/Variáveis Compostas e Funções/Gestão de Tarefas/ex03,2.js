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
    const statusText = tarefa.concluida ? "Sim" : "Não";
    let stringTarefa = `Tarefa ${tarefa.id} - ${tarefa.descricao} (Prioridade: ${tarefa.prioridade}, Concluída: ${statusText})`
    return stringTarefa
}

function marcarTarefaComoConcluida(tarefa, statusConclusao){
    tarefa.concluida = statusConclusao
    const mensagemStatus = tarefa.concluida ? "Concluída" : "Pendente";
    let stringTarefaAlterada = `Tarefa ${tarefa.id} agora está ${mensagemStatus}.`
    return stringTarefaAlterada
}

console.log("--- Status Inicial das Tarefas ---");
for(const tarefa of listaDeTarefas){
    console.log(mostrarDetalhesTarefa(tarefa))
}

console.log("\n--- Atualizando Status das Tarefas ---")
console.log(marcarTarefaComoConcluida(listaDeTarefas[1], true))
console.log(marcarTarefaComoConcluida(listaDeTarefas[2], false))

console.log("\n--- Status Final das Tarefas ---");
for(const tarefa of listaDeTarefas){
    console.log(mostrarDetalhesTarefa(tarefa))
}