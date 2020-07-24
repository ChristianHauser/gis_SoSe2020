"use strict";
var Aufgabe07fertig;
(function (Aufgabe07fertig) {
    let summe = 0;
    let psumme = document.createElement("p");
    let anzahlArtikel = parseInt(localStorage.getItem("anzahlArtikel"));
    createWarenkorbArtikel();
    function createWarenkorbArtikel() {
        for (let i = 0; i <= anzahlArtikel - 1; i++) {
            let newDiv = document.createElement("div");
            document.getElementById("warenkorb").appendChild(newDiv);
            newDiv.id = "divId" + i;
            //IMG IN DIV PACKEN
            let imgElement = document.createElement("img");
            imgElement.src = localStorage.getItem("artikel_bild" + i);
            newDiv.appendChild(imgElement);
            let name = document.createElement("h1");
            name.innerHTML = localStorage.getItem("artikel_name" + i);
            newDiv.appendChild(name);
            //PREIS
            let preiss = document.createElement("p");
            preiss.innerHTML = localStorage.getItem("artikel_preis" + i);
            newDiv.setAttribute("preis", preiss.innerHTML);
            newDiv.appendChild(preiss);
            //BUTTON
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Löschen";
            newDiv.appendChild(kaufen);
            kaufen.addEventListener("click", handleRemoveArtikel);
            //summe berechnen
            summe = summe + parseFloat(preiss.innerHTML);
            psumme.innerHTML = summe.toFixed(2) + "€";
            setsumme();
        }
        function handleRemoveArtikel(_event) {
            //Den Preis verringern
            let preisString = _event.currentTarget.parentElement.getAttribute("preis");
            summe = summe - parseFloat(preisString);
            psumme.innerHTML = summe.toFixed(2) + "€";
            setsumme();
            //Artikel Löschen
            (_event.currentTarget.parentElement).remove();
        }
        Clear();
    }
    //summe in Header plazieren
    function setsumme() {
        document.getElementById("warenkorbWert")?.appendChild(psumme);
    }
    function Clear() {
        let remButton = document.getElementById("clear");
        remButton.addEventListener("click", handleClear);
    }
    function handleClear(_event) {
        for (let i = 0; i <= anzahlArtikel - 1; i++) {
            try {
                document.getElementById("divId" + i).remove();
            }
            catch (error) {
                console.log(error);
            }
            psumme.innerHTML = 0 + ".00€";
            setsumme();
            localStorage.clear();
        }
    }
})(Aufgabe07fertig || (Aufgabe07fertig = {}));
//# sourceMappingURL=warenkorb.js.map