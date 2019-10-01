var choose = "";
var resultat = "";

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

function BitOrGold() {
    aleatoire();
    if (choose == resultat) {
        alert("bien joué c'était " + resultat);
    } else {
        alert("mal joué c'etait " + resultat);
    }
}

