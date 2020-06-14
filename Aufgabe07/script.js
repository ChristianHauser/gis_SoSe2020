"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    let counterstart = 0;
    const counter = document.getElementById("counter");
    //Klasse Inhalt
    let divinhalt = document.createElement("div");
    divinhalt.setAttribute("id", "inhalt");
    // H2 Titel wasser mit ID
    let produktTitel = document.createElement("h2");
    produktTitel.setAttribute("id", "wasserlink");
    produktTitel.innerHTML = "Wasser";
    divinhalt.appendChild(produktTitel);
    //Klasse wasser
    let wasserdiv = document.createElement("div");
    wasserdiv.setAttribute("id", "wasser");
    divinhalt.appendChild(wasserdiv);
    //H2 softdrinkt Titel mit ID
    let softdrinktTitel = document.createElement("h2");
    softdrinktTitel.setAttribute("id", "softdrinktlink");
    softdrinktTitel.innerHTML = "Softdrink";
    divinhalt.appendChild(softdrinktTitel);
    //neue Klasse softdrinkt
    let softdrinktdiv = document.createElement("div");
    softdrinktdiv.setAttribute("id", "softdrinkt");
    divinhalt.appendChild(softdrinktdiv);
    let summe = 0;
    //Schleife die den array mit den Artikeln komplett durchgeht. 
    for (let i = 0; i < Aufgabe06.artikelArray.length; i++) {
        if (Aufgabe06.artikelArray[i].art == "wasser") {
            //Jeder neue Artikel wird in Klasse artikel gespeichern
            let divElement = document.createElement("div");
            divElement.setAttribute("class", "artikel");
            wasserdiv.appendChild(divElement);
            //Bild hinzufügen
            let bildElement = document.createElement("img");
            bildElement.setAttribute("src", Aufgabe06.artikelArray[i].bild);
            divElement.appendChild(bildElement);
            //Titel hinzufügen
            let titelElement = document.createElement("h3");
            divElement.appendChild(titelElement);
            titelElement.innerHTML = Aufgabe06.artikelArray[i].name;
            //Beschreibung hinzufügen
            let beschreibungelement = document.createElement("p");
            divElement.appendChild(beschreibungelement);
            beschreibungelement.innerHTML = Aufgabe06.artikelArray[i].beschreibung;
            //Preis hinzufügen
            let preiselement = document.createElement("i");
            divElement.appendChild(preiselement);
            preiselement.innerHTML = Aufgabe06.artikelArray[i].preis.toString() + "€";
            //Br tags
            let brelement = document.createElement("br");
            divElement.appendChild(brelement);
            let brelement2 = document.createElement("br");
            divElement.appendChild(brelement2);
            //Kaufen Button
            let buttonElement = document.createElement("button");
            buttonElement.innerHTML = "Kaufen";
            divElement.appendChild(buttonElement);
            buttonElement.addEventListener("click", wasserPreis);
            function wasserPreis(_event) {
                summe = summe + Aufgabe06.artikelArray[i].preis;
                summe = summe * 1000;
                summe = summe / 1000;
                console.log("Gesamtsumme: " + summe + " €");
                counterstart++;
                counter.innerHTML = "" + counterstart;
            }
        }
        else {
            //Wiederholung der Schritte
            let divElement = document.createElement("div");
            divElement.setAttribute("id", "soft");
            softdrinktdiv.appendChild(divElement);
            localStorage.setItem("softdrink", Aufgabe06.artikelArray[i].name);
            document.getElementById("soft").innerHTML = localStorage.getItem("softdrink");
            let bildElement = document.createElement("img");
            bildElement.setAttribute("src", Aufgabe06.artikelArray[i].bild);
            divElement.appendChild(bildElement);
            let titelElement = document.createElement("h3");
            divElement.appendChild(titelElement);
            titelElement.innerHTML = Aufgabe06.artikelArray[i].name;
            let beschreibungelement = document.createElement("p");
            divElement.appendChild(beschreibungelement);
            beschreibungelement.innerHTML = Aufgabe06.artikelArray[i].beschreibung;
            let preiselement = document.createElement("i");
            divElement.appendChild(preiselement);
            preiselement.innerHTML = Aufgabe06.artikelArray[i].preis.toString() + "€";
            let brelement = document.createElement("br");
            divElement.appendChild(brelement);
            let brelement2 = document.createElement("br");
            divElement.appendChild(brelement2);
            let buttonElement = document.createElement("button");
            buttonElement.innerHTML = "Kaufen";
            divElement.appendChild(buttonElement);
            divElement.appendChild(buttonElement);
            buttonElement.addEventListener("click", softdrinkPreis);
            function softdrinkPreis(_event) {
                summe = summe + Aufgabe06.artikelArray[i].preis;
                summe = summe * 1000;
                summe = summe / 1000;
                console.log("Gesamtsumme=" + summe + "€");
                counterstart++;
                counter.innerHTML = "" + counterstart;
            }
        }
        document.getElementById("supertolleid")?.addEventListener("click", handleSoft);
        function handleSoft(_event) {
            console.log("hallo");
            document.getElementById("wasser").setAttribute("style", "display: none");
            document.getElementById("wasserlink").setAttribute("style", "display: none");
            document.getElementById("softdrinkt").setAttribute("style", "visibility: visible");
            document.getElementById("softdrinktlink").setAttribute("style", "visibility: visible");
        }
        document.getElementById("wassertolleid")?.addEventListener("click", handleWasser);
        function handleWasser(_event) {
            console.log("hallo");
            document.getElementById("softdrinkt").setAttribute("style", "display: none");
            document.getElementById("softdrinktlink").setAttribute("style", "display: none");
            document.getElementById("wasser").setAttribute("style", "visibility: visible");
            document.getElementById("wasserlink").setAttribute("style", "visibility: visible");
        }
        document.getElementById("allesid")?.addEventListener("click", handleAlles);
        function handleAlles(_event) {
            document.getElementById("inhalt").setAttribute("style", "visability: visible");
            document.getElementById("wasser").setAttribute("style", "visibility: visible");
            document.getElementById("wasserlink").setAttribute("style", "visibility: visible");
            document.getElementById("softdrinkt").setAttribute("style", "visibility: visible");
            document.getElementById("softdrinktlink").setAttribute("style", "visibility: visible");
        }
        let artikel = [];
        window.addEventListener("load", init);
        function init() {
            let url = "artikel.json";
            communicate(url);
        }
        console.log(JSON.parse(artikel.json)[0].name);
        async function communicate(_url) {
            let response = await fetch(_url);
            console.log("Response", response);
            artikel = await response.json();
        }
        // Item Speichern
        // localStorage.setItem("lastname", "Smith");
        // Item Laden
        // (<HTMLElement>document.getElementById("test")).innerHTML = localStorage.getItem("lastname")!;
        //Gesamter Inhalt in main tag
        document.getElementById("main")?.appendChild(divinhalt);
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map