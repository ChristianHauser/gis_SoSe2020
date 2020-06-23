"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //In array speichern
    Aufgabe07.artikelArray = [];
    async function handleData(_url) {
        let re1 = await fetch(_url);
        let re2 = await re1.json();
        //Einlesen von artikelArray aus der json datei 
        Aufgabe07.artikelArray = JSON.parse(JSON.stringify(re2));
    }
    Aufgabe07.handleData = handleData;
    Aufgabe07.jsonArtikelArray = JSON.stringify(Aufgabe07.artikelArray);
    localStorage.setItem("jsonArtikelArray", Aufgabe07.jsonArtikelArray + "");
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=produktInformation.js.map