// Criando uma função construtora

function Pessoa(n, s, raca = "Humano"){
    // atribuidores privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // atributo público pode ser acessado fora da função construtora
    this.raca = raca;

    // metodo privado só conseguimos fazer uso dentro da função construtora
    let imprime_dados = function(){
        console.log(`nome: ${nome}, idade: ${idade}, peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, raça: ${raca}`);
    }
    // método público conseguimos acessar fora da função construtora
    this.fazer_aniversario = function(){
        idade += 1;
        imprime_dados();
    }

    this.getIdade = function(){
        return idade;
    }
}

// instanciando um objeto
const angelina = new Pessoa("Angelina", "Feminino");

console.log(angelina);

console.log(angelina.peso);

console.log(angelina.raca);
angelina.fazer_aniversario();
angelina.fazer_aniversario();
angelina.fazer_aniversario();

// instanciar um objeto
const felicity = new Pessoa("felicity", "Feminino");

felicity.fazer_aniversario();
console.log(felicity.getIdade());

console.log(typeof(Pessoa)); // function
console.log(typeof(felicity)); // object

