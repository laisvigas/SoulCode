console.log("Arrays!")

let lang = "Python";
console.log(lang);
console.log(lang[5]);
console.log(lang[0]);

// vetor, array, lista, matriz
let numero = 5;
let numeros = [4, 8, 7, 1, 0, 6, 8, 0];

console.log(numeros);
console.log(numeros[2]);

numeros[2] = 14;
console.log(numeros);

numeros.push(3);
console.log(numeros);

let last = numeros.length - 1;
console.log("Último: ", numeros[last]);

const nomes = ["Leonardo", "Wesley", "Paulo", "Laís", "Igor", "Larissa"]
console.log(nomes)

for (i = 0; i < nomes.length; i++){
    console.log("Boas-vindas", nomes[i])
}

console.log("====")

for (let nome of nomes) {
    console.log("Boas-vindas", nome)
}