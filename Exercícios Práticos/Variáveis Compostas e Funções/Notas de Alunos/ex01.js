let alunos = [
    {
        nome:'Sara',
        notas: [8.5,2,10]
    },
    {
        nome:'Jeni',
        notas: [10,6,9]
    },
    {
        nome:'Bruna',
        notas: [8,6,1]
    },
    {
        nome:'Nina',
        notas: [8,2,2]
    }
]

function calcularMediaAluno(aluno){
    const arrayDeNotas = aluno.notas;

    let somaDasNotas = 0;
    for (let i = 0; i < arrayDeNotas.length; i++){
        somaDasNotas += arrayDeNotas[i]; // [i] adiciona cada nota à soma
    }

    const media = somaDasNotas / arrayDeNotas.length
    return media
}

console.log("Calculando a média dos alunos:")

for (const aluno of alunos){
    const mediaDoAluno = calcularMediaAluno(aluno)

    console.log(`${aluno.nome}: Média = ${mediaDoAluno.toFixed(2)}`)
}
