let num1 = prompt("Uchta raqam kiriting (num1)");
let num2 = prompt("Uchta raqam kiriting (num2)");
let num3 = prompt("Uchta raqam kiriting (num3)");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

let nums = [num1, num2, num3];
nums.sort(function(a, b) {
    return b - a;
});

let first = nums[0];
let second = nums[1];
let third = nums[2];

console.log(first + " > " + second + " > " + third);