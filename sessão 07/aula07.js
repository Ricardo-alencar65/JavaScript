const curso = {
    nome: "programação em javascript",
    horas: 25,
    preco: 27.99
}

//console.log(curso);

// console.log(Object.keys(curso));

// console.log(Object.values(curso));

//console.log(Object.entries(curso));

// Object.entries(curso).forEach(par =>{
//     console.log(`${par[0]}: ${par[1]}`)
// });

// Object.entries(curso).forEach(([chave, valor]) => {
//     console.log(`${chave}: ${valor}`);
// });

// curso.nome = "Python"

// console.log(curso)

// Object.defineProperty(curso, 'publicacao', {
//     enumerable: true,
//     writable: false,
//     value: "07/12/2019"
// })

// curso.publicacao = "01/01/2001"

// console.log(curso);

// const outro = {}

// Object.defineProperty(outro, "",{

// });

// Object.freeze(curso);

// curso.nome = 'bylearn'
// console.log(curso);


const usuarios = [
    {nome: 'aline moraes', empresa: 'aerosol'},
    {nome: 'ricardo moraes', empresa: 'google'},
    {nome: 'lara moraes', empresa: 'sony'}
]

//console.log(usuarios);

console.table(usuarios);

const rede_social = [
    {Grupos: 'direto - puc', feed: 'exemplo de onde ficaria o feed', amigos: "Paulo"},
    {Grupos: 'piscologia - puc', feed: 'exemplo de onde ficaria o feed', amigos: "Roberto"},
    {Grupos: 'eng. da comp. - puc', feed: 'exemplo de onde ficaria o feed', amigos: "Catarina"},
    {Grupos: 'SI - puc', feed: 'exemplo de onde ficaria o feed', amigos: "Yasmim"},
    {Grupos: 'ADS - puc', feed: 'exemplo de onde ficaria o feed', amigos: "José"}
]

console.table(rede_social)