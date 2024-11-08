function greeting(name, course) {
    console.log(`Welcome ${name} to ${course} bootcamp!`);
}

let user = "Lucas";
let subject = "React"

greeting(user, subject);
greeting("Laís", "FullStack");
greeting("Gabriel", "Cibersecurity");

function score(grade1, grade2, grade3) {
    const calc = (grade1 + grade2 + grade3) / 3;
    return calc;
}

const scoreStudent = score(10, 9, 9);

if (scoreStudent < 7) {
    console.log("Reprovado!");
} else {
    console.log("Aprovado.");
}

function getWeekDay(day) {
    switch(day) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
    }
}

console.log(getWeekDay(7))

function getIMC(weight, height) {
    return weight / (height ** 2);
}

console.log(getIMC(70, 1.8));

function sayGoodbye(name = "friend") {
    console.log(`Goodbye ${name}, see you next time!`);
}

sayGoodbye();
sayGoodbye("Buffy");

/* function calculateCircleArea(r) {
    if (r == undefined) {
        throw new Error("Value not defined");
    }
    return 3.14 * (r ** 2);
} 

console.log(calculateCircleArea())
*/

// Anonymous function

const myfunction = function() {

}

function minus(n1, n2) {
    return n1 - n2;
}

const plus = function(n1, n2) {
    return n1 + n2;
}

console.log(minus(10, 5));
console.log(plus(10, 5));
console.log(plus(""));
console.log(plus(""));

// Callback -> Uma função passada como entrada de outra função
function calcular(operacao, n1, n2) {
    return operacao(n1, n2);
}

calcular(function(n1, n2) {
    return n1 + n2;
}, 12, 8)

const numeros = [3, 6, 9, 4, 1, 7];

numeros.forEach(function(n) {
    console.log(n);
})

// Arrow Function (funções de Seta) -> Função Anônima
const funcaoSemSeta = function() {}
const funcaoComSeta = () => {}

console.log("---------")

numeros.forEach(n => console.log(n)); 
const ola = () => console.log("Olá!");
const hello = _ => console.log("Hello!");

ola();
hello();

function potencia(base, expo) {
    return base ** expo;
}

const potenciaArrow = (base, expo) => base ** expo;

console.log(potencia(3, 4));
console.log(potenciaArrow(3, 4));