"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    let summe = 0;
    let zahler = 0;
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
    //Schleife die den array mit den Artikeln komplett durchgeht. 
    for (let i = 0; i < Aufgabe06.artikelArray.length; i++) {
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
        buttonElement.addEventListener("click", counterbutton);
        function artikelsumme(_event) {
            summe = summe + Aufgabe06.artikelArray[i].preis;
            console.log("Gesamtsumme: " + summe + " €");
        }
    }
    let kreisElement = document.createElement("div");
    kreisElement.innerHTML = (zahler.toString());
    divElement.appendChild(kreisElement);
    function counterbutton(_event) {
        console.log(Aufgabe06.artikelArray[0].preis);
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
    for (let i = 0; i < Aufgabe06.artikelArray.length; i++) {
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        softdrinktdiv.appendChild(divElement);
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
    }
    //Gesamter Inhalt in main tag
    document.getElementById("main")?.appendChild(divinhalt);
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map