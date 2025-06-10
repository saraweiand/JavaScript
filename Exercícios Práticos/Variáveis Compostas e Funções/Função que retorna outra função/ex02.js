/*
Crie uma função chamada cumprimentarCom que recebe uma palavra de saudação (como "Oi", "Olá", "E aí") e retorna uma nova função que recebe um nome e retorna a frase completa: "Oi, Sara!"
*/

function cumprimentarCom(palavra){
    return function(nome){
        return palavra + nome
        // return `${palavra} ${nome}!`;
    }
}

const frase = cumprimentarCom('Oi, ') //('Olá');

console.log(frase('Sara!')) //('Sara')