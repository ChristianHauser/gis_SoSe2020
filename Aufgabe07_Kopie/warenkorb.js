"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let summe = 0;
    let psumme = document.createElement("p");
    let countTo = parseInt(localStorage.getItem("anzahlArtikel"));
    createWarenkorbArtikel();
    function createWarenkorbArtikel() {
        for (let i = 0; i <= countTo - 1; i++) {
            let newDiv = document.createElement("div");
            document.getElementById("warenkorb").appendChild(newDiv);
            newDiv.id = "divId" + i;
            console.log("divId" + i);
            //IMG IN DIV PACKEN
            let imgElement = document.createElement("img");
            imgElement.src = localStorage.getItem("artikel_bild" + i);
            newDiv.appendChild(imgElement);
            console.log(imgElement);
            let name = document.createElement("h1");
            name.innerHTML = localStorage.getItem("artikel_name" + i);
            newDiv.appendChild(name);
            let desc = document.createElement("p");
            desc.innerHTML = localStorage.getItem("artikel_beschreibung" + i);
            newDiv.appendChild(desc);
            //PREIS
            let price = document.createElement("p");
            price.innerHTML = localStorage.getItem("artikel_preis" + i);
            newDiv.setAttribute("preis", price.innerHTML);
            newDiv.appendChild(price);
            //BUTTON
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Löschen";
            newDiv.appendChild(kaufen);
            kaufen.addEventListener("click", handleRemoveArticle);
            //summe berechnen
            summe = summe + parseFloat(price.innerHTML);
            psumme.innerHTML = summe.toFixed(2) + "€";
            setsumme();
        }
        function handleRemoveArticle(_event) {
            //Gesampreis reduzieren
            let preisString = _event.currentTarget.parentElement.getAttribute("preis");
            summe = summe - parseFloat(preisString);
            psumme.innerHTML = summe.toFixed(2) + "€";
            setsumme();
            //Artikel Löschen
            (_event.currentTarget.parentElement).remove();
        }
        removeAll();
    }
    //summe in Header plazieren
    function setsumme() {
        document.getElementById("warenkorbWert")?.appendChild(psumme);
    }
    function removeAll() {
        let remButton = document.getElementById("liRemoveAll");
        remButton.addEventListener("click", handleRemoveAll);
    }
    function handleRemoveAll(_event) {
        for (let index = 0; index <= countTo - 1; index++) {
            try {
                document.getElementById("divId" + index).remove();
            }
            catch (error) {
                console.log(error);
                console.log("Artikel wurde zuvor von Hand gelöscht und kann nicht mehr gefunden werden");
            }
            psumme.innerHTML = 0 + "€";
            setsumme();
            localStorage.clear();
        }
    }
    console.log(localStorage);
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=warenkorb.js.map