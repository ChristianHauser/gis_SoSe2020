"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    //In array speichern
    Aufgabe08.artikelArray = [];
    async function handleData(_url) {
        let resp1 = await fetch(_url);
        let resp2 = await resp1.json();
        //Einlesen von artikelArray aus der json datei 
        Aufgabe08.artikelArray = JSON.parse(JSON.stringify(resp2));
    }
    Aufgabe08.handleData = handleData;
    Aufgabe08.jsonArtikelArray = JSON.stringify(Aufgabe08.artikelArray);
    localStorage.setItem("jsonArtikelArray", Aufgabe08.jsonArtikelArray + "");
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=produktInformation.js.map