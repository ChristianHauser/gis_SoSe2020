"use strict";
var FinalesProjekt;
(function (FinalesProjekt) {
    let summe = 0;
    let psumme = document.createElement("p");
    let anzahlArtikel = parseInt(localStorage.getItem("anzahlArtikel"));
    createWarenkorbArtikel();
    function createWarenkorbArtikel() {
        for (let i = 0; i <= anzahlArtikel - 1; i++) {
            let newDiv = document.createElement("div");
            document.getElementById("warenkorb").appendChild(newDiv);
            newDiv.id = "divId";
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
    let formularButton = document.getElementById("button1");
    formularButton.addEventListener("click", handleFormular);
    async function handleFormular() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020chris.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/senden" + "?" + query.toString();
        await fetch(url);
    }
})(FinalesProjekt || (FinalesProjekt = {}));
//# sourceMappingURL=warenkorb.js.map