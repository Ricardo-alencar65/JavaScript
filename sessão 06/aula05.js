// Forma 1

function somar1(num1, num2){
    return num1 + num2
}

console.log(somar1(4, 6));

let somar2 = function(num1 , num2){
    return num1 + num2
}

console.log(somar2(4, 6));

// forma 3

let somar3 = somar1;

console.log(somar3(4, 6));

// arrow function
let somar4 = (num1, num2) => {
    return num1 + num2
}

console.log(somar4(4, 6))

/*
Atenção:

Caso a sua função tenha apenas 1 parametro de entrada e executa apenas uma linha,
voce pode simplificar ainda mais usando Arrow function
*/

let dobrar = valor => valor*2;

console.log(dobrar(5));