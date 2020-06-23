"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    let counterstart = 0;
    const counter = document.getElementById("counter");
    //Klasse Inhalt
    let divinhalt = document.createElement("div");
    divinhalt.setAttribute("class", "inhalt");
    // H2 Titel wasser mit ID
    let produktTitel = document.createElement("h2");
    produktTitel.setAttribute("id", "wasserlink");
    produktTitel.innerHTML = "Wasser";
    divinhalt.appendChild(produktTitel);
    //Klasse wasser
    let wasserdiv = document.createElement("div");
    wasserdiv.setAttribute("class", "wasser");
    divinhalt.appendChild(wasserdiv);
    console.log("hallo");
    let summe = 0;
    let zahler = 0;
    //Schleife die den array mit den Artikeln komplett durchgeht. 
    for (let i = 0; i < Aufgabe05.mineralWasser.length; i++) {
        //Jeder neue Artikel wird in Klasse artikel gespeichern
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        wasserdiv.appendChild(divElement);
        //Bild hinzufügen
        let bildElement = document.createElement("img");
        bildElement.setAttribute("src", Aufgabe05.mineralWasser[i].bild);
        divElement.appendChild(bildElement);
        //Titel hinzufügen
        let titelElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = Aufgabe05.mineralWasser[i].name;
        //Beschreibung hinzufügen
        let beschreibungelement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = Aufgabe05.mineralWasser[i].beschreibung;
        //Preis hinzufügen
        let preiselement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = Aufgabe05.mineralWasser[i].preis.toString() + "€";
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
            summe = summe + Aufgabe05.mineralWasser[i].preis;
            summe = summe * 1000;
            summe = summe / 1000;
            console.log("Gesamtsumme: " + summe + " €");
        }
    }
    //H2 softdrinkt Titel mit ID
    let softdrinktTitel = document.createElement("h2");
    softdrinktTitel.setAttribute("id", "softdrinktlink");
    softdrinktTitel.innerHTML = "Softdrink";
    divinhalt.appendChild(softdrinktTitel);
    //neue Klasse softdrinkt
    let softdrinktdiv = document.createElement("div");
    softdrinktdiv.setAttribute("class", "softdrinkt");
    divinhalt.appendChild(softdrinktdiv);
    //Wiederholung der Schritte
    for (let i = 0; i < Aufgabe05.softDrinks.length; i++) {
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        softdrinktdiv.appendChild(divElement);
        let bildElement = document.createElement("img");
        bildElement.setAttribute("src", Aufgabe05.softDrinks[i].bild);
        divElement.appendChild(bildElement);
        let titelElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = Aufgabe05.softDrinks[i].name;
        let beschreibungelement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = Aufgabe05.softDrinks[i].beschreibung;
        let preiselement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = Aufgabe05.softDrinks[i].preis.toString() + "€";
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
            summe = summe + Aufgabe05.softDrinks[i].preis;
            summe = summe * 1000;
            summe = summe / 1000;
            console.log("Gesamtsumme=" + summe + "€");
        }
    }
    function wasserPreis(_event) {
        counterstart++;
        counter.innerHTML = "" + counterstart;
    }
    function softdrinkPreis(_event) {
        counterstart++;
        counter.innerHTML = "" + counterstart;
    }
    //Gesamter Inhalt in main tag
    document.getElementById("main")?.appendChild(divinhalt);
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map