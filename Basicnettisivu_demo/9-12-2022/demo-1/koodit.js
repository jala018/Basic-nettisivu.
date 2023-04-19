/**
 * Testataan virheenkäsittely
 */
function tarkasta() {
    try {
        let nimi = doument.getElementById("nimi").value;
        alert("Heippa, " + nimi + "!");
    }

    catch(err) {
        alert("Virhe: " + err.message);
    }

    finally {
        document.getElementById("laatikko").innerHTML = "<br/>Ja homma jatkuu...";
    }
}