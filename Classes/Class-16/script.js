console.log("Long time no see you, HTML!")

console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo)

const paragrafos = document.getElementsByTagName("p")
console.log(paragrafos)

const itens = document.getElementsByClassName("item")
console.log(itens)

const titulo2 = document.querySelector("#titulo");
console.log(titulo2)

const itens2 = document.querySelectorAll("#item");
console.log(itens2)

titulo2.innerHTML = "JavaScript <em>rocks</em>!";

const cover = document.querySelector("#cover");

setTimeout(() => {

    titulo2.style.color = "green";
    titulo2.style.fontFamily = "Arial";
    titulo2.style.backgroundColor = "yellow";

    cover.style.border = "5px dotted green"

    cover.src = "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, 3000)

const msg = document.querySelector("#msg");

setTimeout(() => {
    msg.classList.add("error");
}, 2000);

setTimeout(() => {
    msg.classList.remove("error");
    msg.classList.add("ok");
}, 4000);