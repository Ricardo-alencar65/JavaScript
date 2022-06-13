// let

let novo = "usar let em vez de var"

// const não é alteravel

const taxa = 1.44;
console.log(taxa)
taxa = 2.99; //Erro
console.log(taxa)

// o objeto dentro da contante, nesse caso o {nome:} pode ser alterado
const curso = {nome: "Programação em javascript"}
console.log(curso)
curso.nome = "Programação em python" // mutação
console.log(curso)

/*
Dicas de como declarar variavel em javascript

- A variavel poderá ser alterada? (vai variar?) se sim, use let
- se  variavel será constante?, se sim, use const
*/
