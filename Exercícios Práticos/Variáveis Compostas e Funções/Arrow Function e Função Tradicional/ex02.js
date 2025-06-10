/*
Crie duas funções que recebem dois números e retornam a subtração entre eles:
Uma com arrow function
Outra com função tradicional
*/

const arrow = (v1, v2) => {return v1 - v2}
// const arrow = (v1, v2) => v1 - v2;

console.log(arrow(5,2), '- ARROW')

function normal(v1, v2){
    return v1 - v2
}

console.log(normal(5,2), '- NORMAL')