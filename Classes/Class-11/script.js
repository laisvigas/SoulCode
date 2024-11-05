let idade = 15;
let parents_authorization = true;

if (idade >= 18) {
    console.log("You are eligible to travel.");
} else if (parents_authorization) {
    console.log("You are eligible to travel with an authorization.");
} else {
    console.log("You are not eligible to travel.");
}

let weather = "rainy";

if (weather == "sunny") {
    console.log("I'm going fishing today.");
} else if (weather == "rainy") {
    console.log("I'm going to watch a movie today");
} else {
    console.log("I'm going to read a book today");
}

let n = 37;
if (n > 37 || false); { 
    console.log("Gotcha!");
}

let num = 56;

// ternary operator
console.log((num % 2 == 0) ? "even": "odd");
console.log((num < 2) ? "negative" : "positive");

let day = 4;

switch(day) {
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Wednesday")
        break
    case 6:
        console.log("Friday")
        break
    case 5:
        console.log("Saturday")
        break
    default:
        console.log("Day not found")
}

let a = 17, b = 12, c = 22;

if (a > b) {
    if (b > c) {
        console.log(a, ">", b, ">", c);
    } else if(a > c) {
        console.log(a, ">", c, ">", b);
    } else {
        console.log(c, ">", a, ">", b);
    }
} else if (b > c) {
    if (a > c) {
        console.log(b, ">", a, ">", c);
    } else {
        console.log(b, ">", c, ">", a);
    }
} else {
    console.log(c, ">", b, ">", a);
}