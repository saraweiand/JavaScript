/*
Crie uma função geradora chamada contador que gera números de 1 a 5.
*/

function* contador(){
    let i = 1
    while(true){
        yield i++
        if (i > 5){
            break
        }
    }
}

const itc = contador()

for(let c of itc){
    console.log(c)
}
