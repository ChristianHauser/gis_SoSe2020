"use strict";
var FinalesProjekt;
(function (FinalesProjekt) {
    generateArtikle();
    async function generateArtikle() {
        await FinalesProjekt.handleData("eisArtikel.json");
        machmeineseite();
    }
    FinalesProjekt.generateArtikle = generateArtikle;
    let summe = 0;
    let warenKorbArtikel = [];
    let counterstart = 0;
    const counter = document.getElementById("counter");
    const preisStartSeite = document.getElementById("preisStartSeite");
    let waffelCounter = 0;
    let eisSortenCounter = 0;
    let toppingsCounter = 0;
    let eisDivInhalt = document.createElement("div");
    eisDivInhalt.setAttribute("class", " EisDivBilder");
    document.querySelector(".EisInhalt")?.appendChild(eisDivInhalt);
    //Klasse Inhalt
    let divinhalt = document.createElement("div");
    divinhalt.setAttribute("id", "inhalt");
    // H2 Titel wasser mit ID
    let produktTitel = document.createElement("h2");
    produktTitel.setAttribute("id", "wasserlink");
    produktTitel.innerHTML = "Waffel oder Becher?";
    divinhalt.appendChild(produktTitel);
    //Klasse wasser
    let wasserdiv = document.createElement("div");
    wasserdiv.setAttribute("id", "wasser");
    divinhalt.appendChild(wasserdiv);
    //H2 eis Titel mit ID
    let eisTitel = document.createElement("h2");
    eisTitel.setAttribute("id", "eislink");
    eisTitel.innerHTML = "Eissorten";
    divinhalt.appendChild(eisTitel);
    //neue Klasse eis
    let eisdiv = document.createElement("div");
    eisdiv.setAttribute("id", "eis");
    divinhalt.appendChild(eisdiv);
    let toppingsTitel = document.createElement("h2");
    toppingsTitel.setAttribute("id", "toppingslink");
    toppingsTitel.innerHTML = "Toppings";
    divinhalt.appendChild(toppingsTitel);
    let toppingsDiv = document.createElement("div");
    toppingsDiv.setAttribute("id", "ttoppings");
    divinhalt.appendChild(toppingsDiv);
    //Schleife die den array mit den Artikeln komplett durchgeht. 
    function machmeineseite() {
        let loeschButton = document.createElement("button");
        loeschButton.innerHTML = "Neue Bestellung";
        divinhalt.appendChild(loeschButton);
        loeschButton.addEventListener("click", handleNeueBestellung);
        console.log("hallo");
        for (let i = 0; i < FinalesProjekt.artikelArrayy.length; i++) {
            if (FinalesProjekt.artikelArrayy[i].art == "WaffelOderBecher") {
                //Jeder neue Artikel wird in Klasse artikel gespeichern
                let divElement = document.createElement("div");
                divElement.setAttribute("class", "artikel");
                wasserdiv.appendChild(divElement);
                console.log("hallo");
                //Bild hinzufügen
                let bildElement = document.createElement("img");
                bildElement.setAttribute("src", FinalesProjekt.artikelArrayy[i].bild);
                divElement.appendChild(bildElement);
                //Titel hinzufügen
                let titelElement = document.createElement("h3");
                divElement.appendChild(titelElement);
                titelElement.innerHTML = FinalesProjekt.artikelArrayy[i].name;
                //Beschreibung hinzufügen
                let beschreibungelement = document.createElement("p");
                divElement.appendChild(beschreibungelement);
                beschreibungelement.innerHTML = FinalesProjekt.artikelArrayy[i].beschreibung;
                //Preis hinzufügen
                let preiselement = document.createElement("i");
                divElement.appendChild(preiselement);
                preiselement.innerHTML = FinalesProjekt.artikelArrayy[i].preis.toString() + "€";
                //Br tags
                let brelement = document.createElement("br");
                divElement.appendChild(brelement);
                let brelement2 = document.createElement("br");
                divElement.appendChild(brelement2);
                //Kaufen Button
                let buttonElement = document.createElement("button");
                buttonElement.innerHTML = "Kaufen";
                divElement.appendChild(buttonElement);
                buttonElement.addEventListener("click", handleWaffelHinzuegen);
                buttonElement.addEventListener("click", handleToppinsHinzufuegen);
                buttonElement.addEventListener("click", handleEisHinzufuegen);
            }
            else if (FinalesProjekt.artikelArrayy[i].art == "eis") {
                //Wiederholung der Schritte
                let divElement = document.createElement("div");
                divElement.setAttribute("id", "soft");
                eisdiv.appendChild(divElement);
                let bildElement = document.createElement("img");
                bildElement.setAttribute("src", FinalesProjekt.artikelArrayy[i].bild);
                divElement.appendChild(bildElement);
                let titelElement = document.createElement("h3");
                divElement.appendChild(titelElement);
                titelElement.innerHTML = FinalesProjekt.artikelArrayy[i].name;
                let beschreibungelement = document.createElement("p");
                divElement.appendChild(beschreibungelement);
                beschreibungelement.innerHTML = FinalesProjekt.artikelArrayy[i].beschreibung;
                let preiselement = document.createElement("i");
                divElement.appendChild(preiselement);
                preiselement.innerHTML = FinalesProjekt.artikelArrayy[i].preis.toString() + "€";
                let brelement = document.createElement("br");
                divElement.appendChild(brelement);
                let brelement2 = document.createElement("br");
                divElement.appendChild(brelement2);
                let buttonElement = document.createElement("button");
                buttonElement.innerHTML = "Kaufen";
                divElement.appendChild(buttonElement);
                buttonElement.addEventListener("click", handleWaffelHinzuegen);
                buttonElement.addEventListener("click", handleToppinsHinzufuegen);
                buttonElement.addEventListener("click", handleEisHinzufuegen);
            }
            else if (FinalesProjekt.artikelArrayy[i].art == "Toppings") {
                let divElement = document.createElement("div");
                divElement.setAttribute("id", "toppings");
                toppingsDiv.appendChild(divElement);
                let bildElement = document.createElement("img");
                bildElement.setAttribute("src", FinalesProjekt.artikelArrayy[i].bild);
                divElement.appendChild(bildElement);
                let titelElement = document.createElement("h3");
                divElement.appendChild(titelElement);
                titelElement.innerHTML = FinalesProjekt.artikelArrayy[i].name;
                let beschreibungelement = document.createElement("p");
                divElement.appendChild(beschreibungelement);
                beschreibungelement.innerHTML = FinalesProjekt.artikelArrayy[i].beschreibung;
                let preisElement = document.createElement("i");
                divElement.appendChild(preisElement);
                preisElement.innerHTML = FinalesProjekt.artikelArrayy[i].preis.toString() + "€";
                let brelement = document.createElement("br");
                divElement.appendChild(brelement);
                let brelement2 = document.createElement("br");
                divElement.appendChild(brelement2);
                let buttonElement = document.createElement("button");
                buttonElement.innerHTML = "Kaufen";
                divElement.appendChild(buttonElement);
                buttonElement.addEventListener("click", handleWaffelHinzuegen);
                buttonElement.addEventListener("click", handleToppinsHinzufuegen);
                buttonElement.addEventListener("click", handleEisHinzufuegen);
                console.log(" Error");
            }
            function handleWaffelHinzuegen(_event) {
                if (waffelCounter < 1 && FinalesProjekt.artikelArrayy[i].art == "WaffelOderBecher") {
                    let eisBild = document.createElement("img");
                    eisBild.setAttribute("id", "waffelAnzeigen");
                    eisBild.setAttribute("src", FinalesProjekt.artikelArrayy[i].bild);
                    document.querySelector(".menu .EisDivBilder").append(eisBild);
                    warenKorbArtikel.push(FinalesProjekt.artikelArrayy[i]);
                    localStorage.setItem("artikel_name" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].name);
                    localStorage.setItem("artikel_preis" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].preis.toString());
                    localStorage.setItem("artikel_beschreibung" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].beschreibung);
                    localStorage.setItem("artikel_bild" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].bild);
                    localStorage.setItem("anzahlArtikel", warenKorbArtikel.length.toString());
                    console.log("Gesamtsumme=" + summe + "€");
                    counterstart++;
                    counter.innerHTML = `${counterstart}`;
                    preisStartSeite.innerHTML = `${summe.toFixed(2)} €`;
                    waffelCounter++;
                    summe = summe + FinalesProjekt.artikelArrayy[i].preis;
                    preisStartSeite.innerHTML = `${summe.toFixed(2)} €`;
                }
            }
            function handleToppinsHinzufuegen(_event) {
                if (toppingsCounter < 4 && FinalesProjekt.artikelArrayy[i].art == "Toppings") {
                    let eisBild = document.createElement("img");
                    eisBild.setAttribute("id", "toppingsAnzeigen");
                    eisBild.setAttribute("src", FinalesProjekt.artikelArrayy[i].bild);
                    document.querySelector(".menu .EisDivBilder").append(eisBild);
                    warenKorbArtikel.push(FinalesProjekt.artikelArrayy[i]);
                    localStorage.setItem("artikel_name" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].name);
                    localStorage.setItem("artikel_preis" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].preis.toString());
                    localStorage.setItem("artikel_beschreibung" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].beschreibung);
                    localStorage.setItem("artikel_bild" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].bild);
                    localStorage.setItem("anzahlArtikel", warenKorbArtikel.length.toString());
                    console.log("Gesamtsumme=" + summe + "€");
                    counterstart++;
                    counter.innerHTML = `${counterstart}`;
                    summe = summe + FinalesProjekt.artikelArrayy[i].preis;
                    preisStartSeite.innerHTML = `${summe.toFixed(2)} €`;
                    toppingsCounter++;
                }
            }
            function handleEisHinzufuegen(_event) {
                if (eisSortenCounter < 7 && FinalesProjekt.artikelArrayy[i].art == "eis") {
                    let eisBild = document.createElement("img");
                    eisBild.setAttribute("id", "eisAnzeigen");
                    eisBild.setAttribute("src", FinalesProjekt.artikelArrayy[i].bild);
                    document.querySelector(".menu .EisDivBilder").append(eisBild);
                    warenKorbArtikel.push(FinalesProjekt.artikelArrayy[i]);
                    localStorage.setItem("artikel_name" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].name);
                    localStorage.setItem("artikel_preis" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].preis.toString());
                    localStorage.setItem("artikel_beschreibung" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].beschreibung);
                    localStorage.setItem("artikel_bild" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].bild);
                    localStorage.setItem("anzahlArtikel", warenKorbArtikel.length.toString());
                    console.log("Gesamtsumme=" + summe + "€");
                    counterstart++;
                    counter.innerHTML = `${counterstart}`;
                    summe = summe + FinalesProjekt.artikelArrayy[i].preis;
                    preisStartSeite.innerHTML = `${summe.toFixed(2)} €`;
                    eisSortenCounter++;
                }
            }
            //Gesamter Inhalt in main tag
            document.getElementById("main")?.appendChild(divinhalt);
        }
        function handleNeueBestellung(_event) {
            for (let i = 0; i < 12; i++) {
                document.getElementById("toppingsAnzeigen")?.remove();
                document.getElementById("eisAnzeigen")?.remove();
                document.getElementById("waffelAnzeigen")?.remove();
            }
            waffelCounter = 0;
            eisSortenCounter = 0;
            toppingsCounter = 0;
            summe = 0;
            preisStartSeite.innerHTML = `${summe.toFixed(2)} €`;
            localStorage.clear();
            //            ((<HTMLImageElement>_event.currentTarget).parentElement!).remove();
        }
        let buttonhtml = document.getElementById("button1");
        buttonhtml.addEventListener("click", handleHTML);
        let buttonjson = document.getElementById("button2");
        buttonjson.addEventListener("click", handleJSON);
        //HEROKU ANBINDUNG
        async function handleHTML() {
            let formData = new FormData(document.forms[0]);
            let url = "https://gissose2020chris.herokuapp.com";
            let query = new URLSearchParams(formData);
            url = url + "/speichern" + "?" + query.toString();
            await fetch(url);
        }
        async function handleJSON() {
            let anzeige = document.getElementById("anzeige");
            let url = "https://gissose2020chris.herokuapp.com";
            url = url + "/holen";
            let antwort = await fetch(url);
            let antworttext = await antwort.text();
            anzeige.innerHTML = antworttext;
        }
    }
})(FinalesProjekt || (FinalesProjekt = {}));
//# sourceMappingURL=script.js.map