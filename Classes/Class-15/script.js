const pessoa = {
    nome: "Thy",
    idade: 12,
    cumprimentar: function() {
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

console.log(pessoa)
pessoa.cumprimentar();

// Funções Construtoras => Função que cria um objeto (instância)
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const pessoa2 = new Pessoa("Daniel", 27);
console.log(pessoa2);

// Operador Spread
const produto1 = {
    descricao: "Jogos Digitais",
    preco: 50,
    categoria: "Nintendo"
};
const produto2 = {...produto1}; // copiando tudo de produto1 para um novo objeto

//const produto2 = produto; // apenas referencia o mesmo espaço que produto1 está alocado
produto1.descricao = "Amibos";
console.log(produto1.descricao);
console.log(produto2.descricao);

// Desestruturação
const produto3 = {
    descricao: "SSD 512GB",
    preco: 400,
}

// const descricao = produto3.descricao; -> antes
const { descricao } = produto3; // -> depois, desestruturação do objeto
console.log(descricao)

const pessoa3 = {
    nome: "Estefane",
    endereco: {
        rua: "Rua aqui perto",
        UF: "Ceará"
    }
}
const { nome, endereco: {rua, UF} } = pessoa3;

console.log(nome);
console.log(rua);
console.log(UF);
