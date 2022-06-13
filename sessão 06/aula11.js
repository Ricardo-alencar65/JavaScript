console.log(somar(4, 6));
console.log(executar(4, 6));


// Forma padrao, ele pega isso e manda lá para cima para executar a função
function somar(n1, n2){
    return n1 + n2;
}

// como não é a forma padrão de declarar função ele nao leva a função para o inicio para ser executado 
let executa = function(n1, n2){
    return n1 + n2;
}