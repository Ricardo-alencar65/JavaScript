 // Forma 1
var aluno = new Array ("Cristina", "regina", "Ricardo", "lucas", "Maria");
console.log("ricardo");

// Forma 2 (recomendada)
var notas = [1, 3, 7, 5, 9];
console.log(notas);

// arraw vazio

var dados = [];
console.log(dados);

// Fazendo acesso ao valor de um indice
console.log(notas[2]);

// Alertando o valor a partir do indice
notas[2] = [12];
console.log(notas);

// Atenção ao acessar um valoor com um indice que não existe

console.log(notas[5]);


delete notas[3]; // Deleta o indice 3, porém o array continua com o mesmo tanto de elementos inciais

notas.splice(3, 1); // deleta 1 elemento apartir do indicie 3

notas.splice(3, 0, 56, 76); // Não deleta nenhum elemento, mas vai adicionar os elementos 56 e 76 depois do indicie 3

notas.pop(); //Remove e retorna o ultimo elemento de um array

var ret = notas.pop();
console.log(ret); // nessa variavel vai ter o ultimo elemento do array que foi removido por  causa do .pop

notas.shift(); // Remove e retorna o primeiro elemento do array 
notas.unshift(99); // adciona o 99 no inicio do array
notas.slice(3); // Cria um novo array com as variaveis depoid do indice 3
notas.slice(1 , 3); // apartir do indice 1 pegue até o indice 3 sem inclui-lo

notas.sort(function(a, b) {return a - b;}); // assim se ordena um array de int ou flout