let num = prompt("1 dan 31 gacha bir son kiriting");
num = parseInt(num);

let oyKunlari = {
    1: "Dushanba", 2: "Seshanba", 3: "Chorshanba", 4: "Payshanba", 5: "Juma",
    6: "Shanba", 7: "Yakshanba", 8: "Dushanba", 9: "Seshanba", 10: "Chorshanba",
    11: "Payshanba", 12: "Juma", 13: "Shanba", 14: "Yakshanba", 15: "Dushanba",
    16: "Seshanba", 17: "Chorshanba", 18: "Payshanba", 19: "Juma", 20: "Shanba",
    21: "Yakshanba", 22: "Dushanba", 23: "Seshanba", 24: "Chorshanba", 25: "Payshanba",
    26: "Juma", 27: "Shanba", 28: "Yakshanba", 29: "Dushanba", 30: "Seshanba", 31: "Chorshanba"
};

if (num > 0 && num < 32) {
    let kun = oyKunlari[num];
    console.log(kun);
} else {
    console.log("Noto'g'ri son kiritildi 1 dan 31 gacha bo'lgan son kiriting");
}