var choose = "";
var resultat = "";
var butbit = document.getElementById("butbitcoin");
var butgold = document.getElementById("butgoldcoin");
var play = document.getElementById("play");
var bitcoin = document.getElementById("bitcoin");
var goldcoin = document.getElementById("goldcoin");
var main = document.getElementById("main");

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

    setTimeout(function() {
        if (resultat == "Bitcoin") {
        bitcoin.style.transform = "rotateY(360deg)";
        goldcoin.style.transform = "rotateY(180deg)";
        bitcoin.style.transition = "3s";
        goldcoin.style.transition = "3s";
    } else {
        bitcoin.style.transform = "rotateY(540deg)";
        goldcoin.style.transform = "rotateY(360deg)";
        bitcoin.style.transition = "3s";
        goldcoin.style.transition = "3s";
    }
    }, 500)
    
    
    
}

function BitOrGold() {
    aleatoire();
    animation();
    console.log("mon choix " + choose);
    console.log("la reponse " + resultat);
    if (choose == resultat) {
        console.log("bien joué c'était " + resultat);
    } else {
        console.log("mal joué c'etait " + resultat);
    }
}