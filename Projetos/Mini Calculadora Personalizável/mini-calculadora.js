/*
Usa: funções, arrow functions, switch, lógica condicional, retorno de funções.

O que faz: o usuário escolhe a operação (soma, subtrai, multiplica, divide) e insere dois números. A função retorna o resultado.
Extra: deixar o código modular, com cada operação em uma função separada.
*/

console.log('----- CALCULADORA')
console.log('----- Operações que serão realizadas')
console.log('----- Somar',
            '----- Subtrair',
            '----- Multiplicar',
            '----- Dividir')

const soma = (v1, v2) => {return v1 + v2}
const subtrair = (v1, v2) => {return v1 - v2}
const multiplicar = (v1, v2) => {return v1 * v2}
const dividir = (v1, v2) => {return v1 / v2}

console.log(m(1,2))