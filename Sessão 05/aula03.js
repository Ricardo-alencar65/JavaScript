var cursos = [
    "programação para leigos",
    "algoritimos e logica de programação",
    "programação em c",
    "programação em java",
    "programação em python",
    "banco de dados",
    "programação web com django framework",
    "programação em javaScript"
];
//console.log(cursos);
//console.log(cursos.length);

// definir uma função
function imprimir(curso, indice, array){
    console.log(indice + ' - ' + curso);
    console.log(array);
}

// Para cada
//cursos.forEach(imprimir); 

// ↓tilização de uma função anonima (lambida/callcabk) e templete string
cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`);

});

for(i = 0; i < cursos.length; i ++){
    console.log(i + ' - ' + cursos[i])
};