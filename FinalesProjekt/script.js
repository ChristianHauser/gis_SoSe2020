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
    //Schleife die den array mit den Artikeln komplett durchgeht. 
    function machmeineseite() {
        console.log("hallo");
        for (let i = 0; i < FinalesProjekt.artikelArrayy.length; i++) {
            if (FinalesProjekt.artikelArrayy[i].art == "wasser") {
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
                buttonElement.addEventListener("click", handleClickStorage);
            }
            else {
                //Wiederholung der Schritte
                let divElement = document.createElement("div");
                divElement.setAttribute("id", "soft");
                softdrinktdiv.appendChild(divElement);
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
                buttonElement.addEventListener("click", handleClickStorage);
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
            function handleClickStorage(_event) {
                warenKorbArtikel.push(FinalesProjekt.artikelArrayy[i]);
                localStorage.setItem("artikel_name" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].name);
                localStorage.setItem("artikel_preis" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].preis.toString());
                localStorage.setItem("artikel_beschreibung" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].beschreibung);
                localStorage.setItem("artikel_bild" + (warenKorbArtikel.length - 1), FinalesProjekt.artikelArrayy[i].bild);
                localStorage.setItem("anzahlArtikel", warenKorbArtikel.length.toString());
                summe = summe + FinalesProjekt.artikelArrayy[i].preis;
                summe = summe * 1000;
                summe = summe / 1000;
                console.log("Gesamtsumme=" + summe + "€");
                counterstart++;
                counter.innerHTML = "" + counterstart;
                console.log(localStorage);
            }
            //Gesamter Inhalt in main tag
            document.getElementById("main")?.appendChild(divinhalt);
        }
    }
})(FinalesProjekt || (FinalesProjekt = {}));
//# sourceMappingURL=script.js.map