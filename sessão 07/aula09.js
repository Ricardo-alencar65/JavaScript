class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao(){
        return this._descricao
    }

    set descricao(descricao){
        this._descricao = descricao
    }

    get salario(){
        return this._salario
    }

    set salario(salario){
        this._salario = salario
    }
}

class Pessoas{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome
        this._sobrenome = sobrenome
        this._email = email
        this._cpf = cpf
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

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }

    // Método Extras

    get nome_completo(){
        return this._nome + ' ' + this._sobrenome;
    }

    set nome_completo(nome_completo){
        // Transforma a string em um array onde cada elemento do array será as partes da string separadas por espaço
       nome_completo = nome_completo.split(' ');

       // remove e retorna o elemento da posição 0 de array
       this._nome = nome_completo.shift();

       // Junta os elemnetos do array em uma string separando cada elemento por espaço
       this._sobrenome = nome_completo.join(' ')
    }
}

class Funcionario extends Pessoas{
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;

    }

    get funcao(){
        return this._funcao;
    }

    set funcao(funcao){
        this._funcao = funcao
    }

    get registro(){
        return this._registro;
    }

    set registro(registro){
        this._registro = registro
    }
    imprimir(){
        console.log(`${this.nome} ${this.sobrenome} ${this.registro} ${this.funcao.salario}`)
    }
}

class clientes extends Pessoas{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }

    get renda(){
        return this._renda;
    }

    set renda(renda){
        this._renda = renda;
    }
}

const programador = new Funcao("Programador", 7459.90);
const f1 = new Funcionario('Pedro', 'Silva', 'pedro@gmail.com',23402903910, programador, 'f20e30');

const c1 = new clientes('ricardo', 'alencar', 'ricardo@gmail.com', 00000000, 7000.99)

f1.imprimir()

