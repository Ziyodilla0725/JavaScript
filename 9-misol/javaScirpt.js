let num = prompt("1 dan 5 gacha baho kiriting");
num = parseInt(num);

let bahoTariflari = {
    1: "Yomon",
    2: "Qoniqarsiz",
    3: "Qoniqarli",
    4: "Yaxshi",
    5: "Barakalla"
};

if (num >= 1 && num <= 5) {
    let tarif = bahoTariflari[num];
    console.log(tarif);
} else {
    console.log("Baho qo'yilmagan");
}