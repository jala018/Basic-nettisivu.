/**
 * Asettaa keksin paikoilleen
 */
function asetaKeksi() {
    let nimi = document.getElementById("nimi").value;
    document.cookie = "vieras=" + nimi;
    console.log(document.cookie);
}

/**
 * Luetaan keksi kun sivu ladataan
 */
function tarkistaKeksi() {
    console.log(document.cookie);
    let nimi = document.cookie;
    if(nimi != "") {
        document.getElementById("laatikko").innerHTML = "Tervetuloa takaisin " + nimi;
    } else {
        document.getElementById("laatikko").innerHTML = "Aseta nimi keksiin";
    }
}