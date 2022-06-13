function somar1(){
    let soma = 0;
    for(let i = 0; i < arguments.length; i ++){
        soma += arguments[i];
    }
    return soma;
}


// console.log(somar1()); // 0
// console.log(somar1(2)); // 2
// console.log(somar1(2, 5)); // 7
// console.log(somar1(5,3,9)); // 17
// console.log(somar1(2, 4, 6 ,8, 12)); // 32

function imprime_valores(num1, num2){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

// imprime_valores();
// imprime_valores(4, 6);
// imprime_valores(4, 6, 8);
// imprime_valores(3, 6, 8, 12, 44, 56);

// Gambiarra 1

function somar2(num1, num2, num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;

    return num1 + num2 + num3;
}

// console.log(somar2(4,5,6));
// console.log(somar2());
// console.log(somar2(2));
// console.log(somar2(2,2));
// console.log(somar2(2,2,2));
// console.log(somar2(2,2,2,2));

//console.log(somar2(0,0,0)) // era apa ser 0, mas retorna 6, pois em javascript 0 é igual a false

// gambiarra 2

function somar3(num1, num2, num3){
    num1 = isNaN(num1) ? 1 : num1 // isnan vai retornaar true or foalse
    num2 = isNaN(num2) ? 2 : num2
    num3 = isNaN(num3) ? 3 : num3

    return num1 + num2 + num3
}

// console.log(somar3(4,5,6));
// console.log(somar3());
// console.log(somar3(2));
// console.log(somar3(2,2));
// console.log(somar3(2,2,2));
// console.log(somar3(2,2,2,2));
// console.log(somar3(0,0,0)); // resolveu esse problema

//Forma atual recomendada
function somar4(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}

// console.log(somar4(4,5,6));
// console.log(somar4());
// console.log(somar4(2));
// console.log(somar4(2,2));
// console.log(somar4(2,2,2));
// console.log(somar4(2,2,2,2));
// console.log(somar4(0,0,0)); 

// console.log(somar4("c","b","a"));
// console.log(somar4(true, false,"c")); // true = 1 false = 0
// console.log(somar4(2, true, false));

function somar5(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }
    else{
        return "não foi possivel efetuar a somar"
    }
}

console.log(somar5(4,5,6));
console.log(somar5());
console.log(somar5(2));
console.log(somar5(2,2));
console.log(somar5(2,2,2));
console.log(somar5(2,2,2,2));
console.log(somar5(0,0,0)); 

console.log(somar5("c","b","a"));
console.log(somar5(true, false,"c")); // true = 1 false = 0
console.log(somar5(2, true, false));