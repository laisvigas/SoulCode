import somar, { multiplicar as mult, dividir } from "./calculadora.js";

// bibliotecas / modulos...

console.log(Math.sqrt(121));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.4));
console.log(Math.round(4.6));
console.log(Math.cos(1.5708));
console.log(Math.pow(6, 3));
console.log(Math.cbrt(64));
console.log(Math.abs(9));
const rand = Math.random();
console.log(Math.floor(rand * 100) + 1);
console.log(Math.max(1, 2, 3, 8, 5, 9, 0));
console.log(Math.min(1, 2, 3, 8, 5, 9, 0));

console.log(mult(4, 5));
console.log(dividir(21, 3));
console.log(somar(5, 1));