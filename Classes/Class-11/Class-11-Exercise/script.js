/*
1. Crie um programa que receba uma nota de um aluno (de 0 a 100) e mostre:
"Aprovado" se a nota for maior ou igual a 60.
"Reprovado" se a nota for menor que 60.
*/

let nota = 93;

if (nota >= 60 && nota <= 100) {
    console.log("Nota:", nota, "- Situação do Aluno: Aprovado");
} else if (nota < 60 && nota >= 0) {
    console.log("Nota:", nota, "- Situação do Aluno: Reprovado");
} else {
    console.log("Insira uma nota válida");
}
    
/*
2. Escreva um programa que recebe a idade de uma pessoa 
e mostre a fase da vida em que ela se encontra:
"Criança" se a idade for menor que 12.
"Adolescente" se a idade estiver entre 12 e 17.
"Adulto" se a idade estiver entre 18 e 64.
"Idoso" se a idade for 65 ou mais.
Utilize if, else if e else para resolver a questão.
*/

let idade = 64;

if (idade >= 0 && idade < 12) {
    console.log("Idade:", idade, "-", idade <= 1 ? "ainda é uma criança" : "você é uma criança.");
} else if (idade >= 12 && idade <= 17) {
    console.log("Você tem", idade, "anos, você é adolescente.");
} else if (idade >= 18 && idade <= 64) {
    console.log("Você tem", idade, "anos, você está na fase adulta.");
} else if (idade >= 65) {
    console.log("Você tem", idade, "anos, você está na fase idosa.");
} else {
    console.log("Insira uma idade válida.");
}

/*
3. Crie um programa que recebe um número de 1 a 12 
e mostre o nome do mês do ano correspondente (1 para "Janeiro", 2 para "Fevereiro", etc.). 
Utilize switch para realizar o mapeamento dos números para os meses do ano.
*/

let mes = 10;

switch(mes) {
    case 1:
        console.log("Janeiro")
        break
    case 2:
        console.log("Fevereiro")
        break
    case 3:
        console.log("Março")
        break
    case 4:
        console.log("Abril")
        break
    case 5:
        console.log("Maio")
        break
    case 6:
        console.log("Junho")
        break
    case 7:
        console.log("Julho")
        break
    case 8:
        console.log("Agosto")
        break
    case 9:
        console.log("Setembro")
        break
    case 10:
        console.log("Outubro")
        break
    case 11:
        console.log("Novembro")
        break
    case 12:
        console.log("Dezembro")
        break
    default:
        console.log("Mês inválido")
}

/*
4. Crie uma função que recebe um nome de usuário e uma senha como parâmetros 
e verifica se eles correspondem a valores predefinidos, como:
usuario = "admin"
senha = "12345"
Se o usuário e a senha estiverem corretos, retorne "Login bem-sucedido".
Caso contrário, retorne "Usuário ou senha incorretos".
Use if para validar as informações de login.
*/

function autenticando(usuario, senha) {
    if (usuario === "admin" && senha === "12345") {
        return "Login bem-sucedido";
    } else {
        return "Usuário ou senha incorretos";
    }
}

console.log(autenticando("adm", "12345"));


/*
5. Desenvolva um programa que receba a pontuação de um jogo 
e utilize um operador ternário para retornar:
"Você venceu!" se a pontuação for maior ou igual a 100.
"Tente novamente!" se a pontuação for menor que 100.
*/

pontos = 170;
console.log(pontos >= 100 ? "Você venceu!" : "Tente novamente!");