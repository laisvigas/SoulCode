const linguagem = "JavaScript";

console.log(linguagem[0]);

for (let letra of linguagem) {
    console.log(letra)
}

console.log(linguagem);
console.log(linguagem.toLowerCase());
console.log(linguagem.toUpperCase());
console.log(linguagem.endsWith("Script"));
console.log(linguagem.startsWith("PHP"));
console.log(linguagem.includes("va"));
console.log(linguagem.includes("Type"));
console.log(linguagem.indexOf("a"));
console.log(linguagem.lastIndexOf("a"));
console.log(linguagem.replace("Java", "Type"));
console.log(linguagem.slice(2, 7));

const nomeCompleto = "Laís Vigas";
const curso = "Full Stack";

console.log("Boas-vindas", nomeCompleto, "ao curso", curso);
console.log(`Boas-vindas ${nomeCompleto} ao curso ${curso}`);

const numero1 = 45;
const numero2 = 15;
console.log(`A soma de ${numero1} e ${numero2} é igual a ${numero1 + numero2}`);

console.log("")
console.log("Objetos")
console.log("")

const pessoa = {
    nome: "Francisco",
    idade: 31,
    altura: 1.85,
    peso: 90,

    cumprimentar: function() {
        console.log("Olá, eu me chamo", this.nome);
    },

    envelhecer: function() {
        this.idade++;
    }
}

console.log(pessoa)
pessoa.salario = 5000;
pessoa["salario"] += 500
delete pessoa.altura

console.log(pessoa)

pessoa.cumprimentar();
pessoa.envelhecer();

function Anime(titulo, genero) {
    this.titulo = titulo;
    this.genero = genero;
}

const anime1 = new Anime("Naruto", "ação");
const anime2 = new Anime("One Piece", "aventura");
const anime3 = new Anime("Fullmetal Alchemist", "drama");

console.log(`O anime ${anime1.titulo} é do gênero ${anime1.genero}.`)

console.log("")
console.log("Operador Spread")
console.log("")

let a1 = {nome: "João"};
let a2 = a1;
a2.nome = "Maria"
console.log(a1, a2)