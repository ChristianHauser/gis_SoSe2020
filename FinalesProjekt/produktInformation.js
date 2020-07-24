"use strict";
var FinalesProjekt;
(function (FinalesProjekt) {
    //In array speichern
    FinalesProjekt.artikelArrayy = [];
    async function handleData(_url) {
        let re1 = await fetch(_url);
        let re2 = await re1.json();
        //Einlesen von artikelArray aus der json datei 
        FinalesProjekt.artikelArrayy = JSON.parse(JSON.stringify(re2));
    }
    FinalesProjekt.handleData = handleData;
    FinalesProjekt.jsonArtikelArrayy = JSON.stringify(FinalesProjekt.artikelArrayy);
    localStorage.setItem("jsonArtikelArray", FinalesProjekt.jsonArtikelArrayy + "");
})(FinalesProjekt || (FinalesProjekt = {}));
//# sourceMappingURL=produktInformation.js.map