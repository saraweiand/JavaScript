/*
Crie uma função chamada criarMultiplicador que recebe um número e retorna uma nova função que multiplica qualquer número por ele.
*/

function criarMultiplicador(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}
const dobrar = criarMultiplicador(2);

console.log(dobrar(5));