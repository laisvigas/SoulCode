/* 3. Crie dois vetores de números, vetor1 e vetor2, com valores distintos. 
Crie uma função que receba ambos os vetores e retorne um novo vetor que combine todos os elementos dos dois vetores. 
Use o operador spread para concatenar os vetores. */


function combinarVetores(v1, v2) {
    return [...v1, ...v2];
  }

const vetorCombinado = combinarVetores([1, 2, 3], [4, 5, 6]);
console.log(vetorCombinado); 


/* 4. Crie um objeto usuario com as propriedades nome, idade, e email. 
Crie um novo objeto usuarioCompleto que contenha todas as propriedades 
de usuario mais uma propriedade adicional, telefone. Use o operador spread para copiar as propriedades. */

const usuario = {
    nome: "Francisco Ferreira",
    idade: 57,
    email: "francisco@email.com"
}

const usuarioCompleto = {...usuario, telefone: 999889999}
console.log(usuarioCompleto)

/* 5. Crie um objeto livro com as propriedades titulo, autor, ano e genero. 
Use destructuring para extrair titulo e autor em variáveis separadas e exiba essas variáveis no console. */

const livro = {
    titulo: "1984",
    autor: "George Orwell",
    ano: 1949,
    genero: "Ficção Cientifica"
}

const { titulo, autor, ano, genero } = livro;

console.log(`O livro se chama ${titulo} do autor ${autor}. O livro foi publicado em ${ano} e é um ${genero}.`)