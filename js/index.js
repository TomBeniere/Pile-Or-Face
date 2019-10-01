var choose = "";
var resultat = "";

function aleatoire() {
    if (Math.floor(Math.random() * (2 - 0) + 0) >= 1) {
        return resultat = "Bitcoin";
    } else if (Math.floor(Math.random() * (2 - 0) + 0) < 1){
        return resultat = "Ethereum";
    } else {
        return resultat = "bug merci !";
    }
}

function Bit() {
    return choose = "Bitcoin";
}

function Ether() {
    return choose = "Ethereum";
}

function BitOrEther() {
    aleatoire();
    if (choose == resultat) {
        alert("bien joué c'était " + resultat);
    } else {
        alert("mal joué c'etait " + resultat);
    }
}