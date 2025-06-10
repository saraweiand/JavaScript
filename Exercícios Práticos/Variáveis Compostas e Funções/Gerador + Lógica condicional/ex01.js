/*
Crie uma função geradora chamada paresAte que recebe um número n e retorna os pares de 0 até n.
*/

function* paresAte(n){
    for (let i = 0; i <= n; i++){
        if (i % 2 === 0){
            yield i
        }
    }
}

const numeros = paresAte(5)

for(c of numeros){
    console.log(c)
}
