/*
Crie uma arrow function calculadora que recebe uma operação ("soma", "subtrai") e retorna uma função que faz a conta entre dois números.
*/

const calculadora = (operacao) => {
    return function(v1, v2){
        if(operacao == 'Soma')
            return v1 + v2
        else
            return v1 - v2
    }
}

const escolha1 = calculadora('Soma')
console.log(escolha1(5,2), '- SOMAR')

const escolha2 = calculadora('Subtrai')
console.log(escolha2(5,2), '- SUBTRAIR')
