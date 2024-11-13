// Programação assíncrona são funções executando de fotma paralela

console.log("Antes");

setTimeout(() => {
    console.log("Atrasado");
}, 2000);

console.log("Depois");

let a = 2;
a++;
setTimeout(() => ++a, 1000);
console.log(a);

// async e await
// Promise - Promessa (instrução executada de forma assíncrona)
/*
axios.get("https://api.github.com/users/laisvigas").then(resposta => {
    console.log(resposta);
});
*/

async function buscarDadosGithub() {
    const resposta = await axios.get("https://api.github.com/users/laisvigas");
    console.log(resposta);
};

buscarDadosGithub();

console.log("Depois da requisição");