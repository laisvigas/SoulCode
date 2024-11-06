/*
1. Crie um programa que receba um vetor de números e mostre a soma de todos os elementos. 
Utilize um loop while para percorrer o vetor e somar cada elemento.
 */

let numeros = [12, 90, 22, 17, 56, 49, 46, 34, 10];
let i = 0;
let tamanho = numeros.length;
let soma = 0;

while (i < tamanho) {
    soma += numeros[i];
    i++;
}

console.log("A soma de todos os números da lista é:", soma);

/*
2. Escreva um programa que recebe um vetor de números e mostre a quantidade de números pares no vetor. 
Use um loop while para verificar cada elemento e um contador para contar os números pares.
*/

let maisNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let indice = 0
let numerosPares = 0;

while (indice < maisNumeros.length) {
    if (maisNumeros[indice] % 2 == 0) {
        numerosPares++
    }
    indice++
}

console.log("A lista tem", numerosPares, "números pares");

/*
3. Crie um programa que receba um vetor de strings e imprima cada item com uma mensagem personalizada, 
por exemplo: "Item: maçã", "Item: banana", etc. Utilize o loop for...of para percorrer o vetor e exibir cada item.
*/

let filmes = ["Interstellar", "The Birds", "Star Trek", "Get Out", "Split"]
let contador = 1;

for (filme of filmes) {
    console.log("Filme", contador, "-", filme)
    contador++;
}

/*
4. Desenvolva um programa que receba um vetor de números e um valor multiplicador. 
O programa deve mostrar um novo vetor com cada elemento multiplicado pelo valor fornecido.
*/

let listaQuatro = [2, 4, 6, 8, 10];
let novaListaQuatro = [];
let multiplicador = 2;

for (let valor of listaQuatro) {
    novaListaQuatro.push(valor * multiplicador);
}


console.log("A lista multiplicada é:", novaListaQuatro)

/* 
5. Escreva um programa que receba um vetor de números e mostre o maior valor contido nele. 
Utilize um loop for para comparar cada valor e encontrar o maior.
*/

let listaCinco = [4, 7, 3, 9, 5];
let maior = listaCinco[0]; 

for (let i = 1; i < listaCinco.length; i++) {
    if (listaCinco[i] > maior) { 
        maior = listaCinco[i];
    }
}

console.log("O maior valor da lista:", maior);
