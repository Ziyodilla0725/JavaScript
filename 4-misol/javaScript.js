let num = prompt("Havo haroratini kiriting");
num = parseInt(num);

if (num > 20) {
    console.log("Juda issiq");
} else if (num > 10) {
    console.log("Issiq");
} else if (num > 0) {
    console.log("Iliq");
} else if (num > -10) {
    console.log("Sovuq");
} else if (num > -20) {
    console.log("Juda sovuq");
} else {
    console.log("Qahraton sovuq");
}