let num1 = prompt("Birinchi sonni kiriting");
let num2 = prompt("Ikkinchi sonni kiriting");
let operator = prompt("Amalni kiriting (+, -, *, /)");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (operator === '+') {
    natija = num1 + num2;
} else if (operator === '-') {
    natija = num1 - num2;
} else if (operator === '*') {
    natija = num1 * num2;
} else if (operator === '/') {
    natija = num1 / num2;
} else {
    natija = "Noto'g'ri amal kiritildi!";
}

console.log(natija);