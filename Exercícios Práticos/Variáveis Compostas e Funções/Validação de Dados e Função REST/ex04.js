/*
* EXERCÍCIO 4: Validação de Dados e Funções REST
*
* OBJETIVO:
* - Criar uma função 'cadastrarPessoa' com parâmetros 'nome', 'idade' e '...hobbies' (REST).
* - Implementar validações para 'nome' (string não vazia), 'idade' (número > 0).
* - Exibir aviso se 'hobbies' for vazio.
* - Se válido, exibir mensagem de sucesso com os dados da pessoa; caso contrário, erro e retornar false.
* - Testar a função com cenários válidos, inválidos e sem hobbies.
*/

function cadastrarPessoa(nome, idade, ...hobbies){
    if(nome == '' || typeof nome !== 'string'){
        console.log("ERRO: Nome inválido!")
        return false
    } if (idade < 0 || typeof idade !== 'number'){
        console.log("ERRO: Idade inválida!")
        return false
    }
    
    let hobbiesFormatados
    
    if(hobbies.length === 0){
        console.log("AVISO: Nenhum Hobby informado.")
        hobbiesFormatados = "Nenhum hobby informado."
    } else{
        hobbiesFormatados = hobbies.join(', ');
    }

    console.log('Pessoa cadastrada com sucesso!')
    console.log(`${nome}, Idade: ${idade}, Hobbies: ${hobbiesFormatados}`)
}

// a) Cadastro válido:
console.log("\nCenário a: Cadastro válido");
cadastrarPessoa("Sara", 23, "leitura", "cozinhar", "jogar xadrez");

// b) Nome inválido:
console.log("\nCenário b: Nome inválido");
cadastrarPessoa("", 30, "caminhada");
cadastrarPessoa(123, 25, "programar");

// c) Idade inválida:
console.log("\nCenário c: Idade inválida");
cadastrarPessoa("Bruna", -5, "filmes");
cadastrarPessoa("Jeni", "vinte", "viajar");

// d) Sem hobbies:
console.log("\nCenário d: Sem hobbies");
cadastrarPessoa("Nina", 22);

