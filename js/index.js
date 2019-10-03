var choose = "";
var resultat = "";
var butbit = document.getElementById("butbitcoin");
var butgold = document.getElementById("butgoldcoin");
var play = document.getElementById("play");
var bitcoin = document.getElementById("bitcoin");
var goldcoin = document.getElementById("goldcoin");
var main = document.getElementById("main");
var score = document.getElementById("score");
var point = 0;

butbit.addEventListener("click", Bit);
butgold.addEventListener("click", Gold);
play.addEventListener("click", BitOrGold);


function aleatoire() {
    if (Math.floor(Math.random() * (2 - 0) + 0) >= 1) {
        return resultat = "Bitcoin";
    } else {
        return resultat = "Goldcoin";;
    }
}

function Bit() {
    return choose = "Bitcoin";
}

function Gold() {
    return choose = "Goldcoin";
}

function animation() {
    main.style.position = "relative";

    bitcoin.style.zIndex = "100";
    goldcoin.style.zIndex = "50";
    bitcoin.style.position = "absolute";
    goldcoin.style.position = "absolute";
    goldcoin.style.transform = "rotateY(-180deg)";
    bitcoin.style.backfaceVisibility = "hidden";
    goldcoin.style.backfaceVisibility = "hidden";

    setTimeout(function () {
        if (resultat == "Bitcoin") {
            bitcoin.style.transform = "rotateY(2520deg)";
            goldcoin.style.transform = "rotateY(1620deg)";
            bitcoin.style.transition = "2s";
            goldcoin.style.transition = "2s";
        } else {
            bitcoin.style.transform = "rotateY(2700deg)";
            goldcoin.style.transform = "rotateY(1800deg)";
            bitcoin.style.transition = "2s";
            goldcoin.style.transition = "2s";
        }
    }, 500)

    setTimeout(function () {
        if (choose == resultat) {
            point += 1;
            score.innerHTML = "Score : " + point;
        }
        bitcoin.style.position = "static";
        goldcoin.style.position = "static";
        bitcoin.style.transition = "0s";
        goldcoin.style.transition = "0s";
        bitcoin.style.backfaceVisibility = "visible";
        goldcoin.style.backfaceVisibility = "visible";
        bitcoin.style.transform = "rotateY(0deg)";
        goldcoin.style.transform = "rotateY(0deg)";
    }, 3500)
}

function BitOrGold() {
    aleatoire();
    animation();
}