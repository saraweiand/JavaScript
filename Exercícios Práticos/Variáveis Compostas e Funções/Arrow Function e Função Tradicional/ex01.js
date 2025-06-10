/*
Crie duas funções que recebem um nome e retornam uma saudação. Uma deve ser tradicional, a outra uma arrow function.
*/

const nome = n => `Olá, ${n}!`

console.log(nome('Sara'), '- ARROW')

function nome2(n){
    return `Olá, ${n}!`
}

console.log(nome2('Sara'), '- NORMAL')
