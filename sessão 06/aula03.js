function calcular_idade1(ano_nascimento){
    const data = new Date(); //gera a data atual

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento

    console.log(idade);
}

let ret = calcular_idade1(1998);
//console.log(ret + 3);

//calcular_idade2(1998);
//let d = new Date();

//console.log(d.getFullYear());

//console.log(calcular_idade(1998));

//let ret = calcular_idade(1998);
//console.log(ret);

const data = new Date();

// console.log("data completa: " + data);

// console.log("ano: " + data.getFullYear())

// console.log("mes: " + data.getMonth()); // mes começa em 0, e nao em 1

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(4, 6));

console.log(somar(4));

console.log(somar(4, 6, 8));

console.log(somar(4, 6,8, 3, 2 ,1, 19));

