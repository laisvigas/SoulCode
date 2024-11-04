console.log("Hello, World again!")

// one line comment

/*
multiple 
lines comment
*/

let nome = "Lucas Ferreira";
idade = 31;
nota = 9.7;

console.log(nome, idade, nota);

let tipo = "Lorem"; // string
console.log(typeof tipo) 
tipo = 29; // number
tipo = false; // boolean
tipo = null; // null
console.log(typeof tipo) 
let valor; // undefined
console.log(typeof valor) 

const x = 12, y = 6;

console.log(x + y)
console.log(y - x)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)

let a = 5, b = 6, c = 3;
let delta = (b ** 2) + (4 * a * c);
console.log(delta);

let numero = 2;
console.log(numero++);
console.log(++numero);
console.log(numero--);
console.log(--numero);
numero++;
console.log(numero);

console.log(6 == 6);
console.log("6" == 6);
console.log("6" === 6);
console.log(4 < 7);
console.log(4 > 7);
console.log(9 >= 9);
console.log(7 <= 7);
console.log("6" !== 6);
console.log("6" != 6);
console.log("Lucas" == "lucas");
console.log("Lucas" == "Lucas");

let a1 = true;
let a2 = false;
console.log(a1);

// conjunction = AND -> &&
// disjunction = OR -> ||
// negation = NOT -> !

let p = true;
let q = false;
console.log(p && q);
console.log(p || q);
console.log(p && !q);
console.log(!p || q);
console.log(!(p || q));

console.log((4*3) > 125 || (6%3 == 1) || (90*2*0.5) == (110-20));