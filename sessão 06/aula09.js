let xuxa = "Global";  // pode ser acessada globalmente para o nosso programa

function imprimir(){
    console.log(xuxa)
}

function outra(){
    let xuxa = "local"; // pode ser acessada localmente no bloco/contexto
    imprimir();
    console.log(xuxa);

}

outra();

// nova exemplo

let variavel = "Global";  // pode ser acessada globalmente para o nosso programa

function externa(){
    console.log(xuxa)
    let variavel = "local";

    function interna(){
        return variavel;
    }

    return interna;
}

let executa = externa();

console.log(executa())