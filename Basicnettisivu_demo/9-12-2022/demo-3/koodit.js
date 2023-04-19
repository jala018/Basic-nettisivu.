/**
 * Lisää muistiinpano
 */
function lisaa() {
    let teksti = document.getElementById("teksti").value;

    if (teksti != "") {
        let pNode = document.createElement("p");
        let tekstiNode = document.createTextNode(teksti);

        pNode.appendChild(tekstiNode);
        document.getElementById("memo").appendChild(pNode);
        document.getElementById("teksti").value = "";
    }
}

/**
 * Tyhjentää muistiinpanot
 */
 function tyhjenna() {
    document.getElementById("memo").innerHTML = "";
}