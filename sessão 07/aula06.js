class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`)
    }

    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`)
    }
}

class Carro {
    constructor(modelo){
        this._marca = "honda";
        this._modelo = modelo;
    }

    get marca(){
        return this._marca
    }

    get modelo(){
        return this._modelo
    }
    set modelo(modelo){
        return this._modelo = modelo
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`)
    }
}

// instanciação de objetos - forma 1
// const curso = new Object()
// curso.nome = 'programação em javaScript';
// curso.preco = 27.99;

// console.log(curso);

// curso['qtd_alunos'] = 999

// console.log(curso);

// delete curso['qtd_alunos'];
// delete curso['preco'];

// console.log(curso);


// instanciação de objetos - forma 2 - objeto literal
const programa = {
    nome: 'Photoshop',
    preco: 8999.99,
    fabricante: {
        nome: 'Adobe',
        contato: "contact@adobe.com",
        endereco: {
            rua: 'da paz, 45',
            bairro: "nova lima",
            cidade: "São Paulo"
        },
    filiais: [
        {cidade: "rio de janeiro"},
        {cidade: "recife"}
    ]
    }
}

//console.log(programa)

//console.log(programa.nome)//photoshop
// console.log(programa.fabricante.nome)//Adobe
// console.log(programa.fabricante.filiais.length)//2

// console.log(programa["fabricante"]["filiais"])

// programa.nome = "playstation OS";

// console.log(programa.nome);
// console.log(programa);

// delete programa.fabricante.filiais;
// console.log(programa.fabricante.filiais)// undefined


// instanciação de objetos - forma 3 - objeto literal

// const pessoa = {};

// pessoa.nome = 'Angela'
// console.log(pessoa);


// instanciação de objetos - forma 4 - função construtora
// function lampada(cor){
//     this.cor = cor;
// }

// const l1 = new lampada("branca");

// console.log(l1);

// console.log(typeof(l1));

// instanciação de objetos - forma 5 - objeto lapartir das nossas classes

// const p1 = new Pessoa("Felicity", "Sobrenome");
// console.log(p1)
// console.log(p1.nome); // função get
// console.log(p1.sobrenome); // função get

// p1.nome = "xuxa"
// console.log(p1)

// p1.falar("vem comer e beber");
// p1.comer();
// p1.beber();

const fit = new Carro("fit")
fit.imprimir();