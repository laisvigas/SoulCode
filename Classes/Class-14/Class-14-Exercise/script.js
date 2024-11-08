const spot = _ => console.log("");
/*
1. Escreva uma função anônima que recebe um número e retorna o dobro desse número. 
Atribua a função a uma variável chamada dobro e teste-a com alguns valores.
*/

const timesTwo = a => a * 2;
console.log(`7 x 2 = ${timesTwo(7)}`)
spot()
/* 
2. Crie uma arrow function chamada cubo que recebe um número e retorna o cubo dele. 
Teste a função com diferentes valores para verificar se o resultado está correto.
*/

const cube = n => n ** 3;
console.log(`The cube of 3 is ${cube(3)}`);
spot()
/*
3. Desenvolva uma função chamada calculaDesconto que recebe um preço e uma taxa de desconto 
(com valor padrão de 5%). A função deve retornar o preço com o desconto aplicado. 
Teste a função passando apenas o preço e depois passando o preço e a taxa.
*/

function calculaDesconto(valor, desconto = 5) {
    return valor - (valor * (desconto / 100));
}

console.log(`O novo valor, com desconto aplicado é de R$${calculaDesconto(100, 10)}.`)
console.log(`O valor com desconto padrão (5%) é R$${calculaDesconto(100)}.`);
spot()
/*
4. Crie uma função chamada executaOperacao que recebe dois números e uma função de callback como parâmetros. 
A função deve executar a operação fornecida pelo callback com os dois números. 
Teste a função com operações de adição, subtração e multiplicação, passando funções anônimas como callbacks.
*/

function executaOperacao(operacao, n1, n2) {
    return operacao(n1, n2);
}

console.log("5 + 3 =", executaOperacao((n1, n2) => n1 + n2, 5, 3)); 
console.log("5 - 3 =", executaOperacao((n1, n2) => n1 - n2, 5, 3));
console.log("5 * 3 =", executaOperacao((n1, n2) => n1 * n2, 5, 3)); 
spot()
/*
5. Dado um vetor de números [1, 2, 3, 4, 5], 
utilize o método forEach e uma função de callback para imprimir cada número multiplicado por 2. 
Use uma função anônima ou uma arrow function como callback para simplificar o código.
*/

const numeros = [1, 2, 3, 4, 5];
numeros.forEach(n => console.log(`${n} * 2 = ${n * 2}`)); 
