/*
Função fabrica - function factory
*/

function fabricar_curso(n, p){
    const desconto = 0.90;
    return{
        nome: n,
        preco: (p * desconto).toFixed(2)
    }
}

console.log(fabricar_curso("programação em javascript", 27.99));
console.log(fabricar_curso("programação em javascript", 35.99));

cursos = []

for (let i = 0; i < 5; i++){
    cursos.push(fabricar_curso(`curso ${i + 1}`, `${19.99 + i * 3}`))
}

console.log(cursos);