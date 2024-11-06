console.log("")
console.log("Exemplo 1")
console.log("")

let contador = 0;

while(contador < 10) {
    console.log(contador)
    contador++;
}

let nome = "Aurora"
let posicao = 0;

console.log("")
console.log("Exemplo 2")
console.log("")


while(nome[posicao] != "a"){
    console.log(nome[posicao])
    posicao++;
}

console.log("")
console.log("Exemplo 3")
console.log("")

for (let contador = 0; contador < 10; contador++) {
    console.log(contador);
}

console.log("")
console.log("Exemplo 4")
console.log("")

x = 1
y = 150
for (let i = x; i < y; i++) {
    if (i % 7 == 0) {
        console.log(i);
        break;
    }
}

console.log("")
console.log("Exemplo 5")
console.log("")


for (let i = 15, c = 0; i < 50; i++) {
    if (i % 6 == 0) {
        console.log(i);
        c++;
    }
    if (c === 3) {
        break;
    }
}

console.log("")
console.log("Exemplo 6")
console.log("")

for (let i = 0; i < 10; i++) {
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}