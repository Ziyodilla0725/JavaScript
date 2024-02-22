let num1 = prompt("Birinchi sonni kiriting");
let num2 = prompt("Ikkinchi sonni kiriting");
num1 = parseInt(num1);
num2 = parseInt(num2);

let yigindi = num1 + num2;

if (yigindi % 2 === 0) {
    console.log("JUFT");
} else {
    console.log("TOQ");
}