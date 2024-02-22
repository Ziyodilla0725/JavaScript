let str = prompt("Fasillardan Oy kiriting");

let fasllar = {
    "bahor": ["mart", "aprel", "may"],
    "yoz": ["iyun", "iyul", "avgust"],
    "kuz": ["sentyabr", "oktabr", "noyabr"],
    "qish": ["dekabr", "yanvar", "fevral"]
};

let fasl = "";
for (let item in fasllar) {
    if (fasllar[item].includes(str)) {
        fasl = item;
        break;
    }
}

if (fasl !== "") {
    console.log(fasl);
} else {
    console.log("Topilmadi");
}