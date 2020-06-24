"use strict";
var Aufgabe07fertig;
(function (Aufgabe07fertig) {
    //In array speichern
    Aufgabe07fertig.artikelArray = [];
    async function handleData(_url) {
        let re1 = await fetch(_url);
        let re2 = await re1.json();
        //Einlesen von artikelArray aus der json datei 
        Aufgabe07fertig.artikelArray = JSON.parse(JSON.stringify(re2));
    }
    Aufgabe07fertig.handleData = handleData;
    Aufgabe07fertig.jsonArtikelArray = JSON.stringify(Aufgabe07fertig.artikelArray);
    localStorage.setItem("jsonArtikelArray", Aufgabe07fertig.jsonArtikelArray + "");
})(Aufgabe07fertig || (Aufgabe07fertig = {}));
//# sourceMappingURL=produktInformation.js.map