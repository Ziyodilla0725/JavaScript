let num = prompt("Raqam kiriting");
num = parseInt(num);

let oxirgiRaam = num % 10;

if (oxirgiRaam === 7) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}