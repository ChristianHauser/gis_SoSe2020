"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    //Wasser
    const artikel1 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Mineralwasser/wasser1.png", name: "Superwasser", beschreibung: "Extremwasser.", preis: 1.00, art: "wasser" };
    const artikel2 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Mineralwasser/wasser2.png", name: "Wasser Super", beschreibung: "Wow was für tolles Wasser", preis: 1.20, art: "wasser" };
    const artikel3 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Mineralwasser/wasser3.png", name: "Tolles Wasser", beschreibung: "Erfrischend Prickelnd", preis: 1.30, art: "wasser" };
    const artikel4 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Mineralwasser/wasser4.png", name: "Wasserrrr", beschreibung: "Neu jetzt in Medium!", preis: 1.20, art: "wasser" };
    const artikel5 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Mineralwasser/wasser5.jpg", name: "Waser", beschreibung: "MIt extra viel Kohlensäure", preis: 1.23, art: "wasser" };
    const artikel6 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Mineralwasser/wasser6.jpg", name: "Wasser", beschreibung: "Superpreis", preis: 1.20, art: "wasser" };
    const artikel7 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Mineralwasser/wasser7.jpg", name: "Wasser", beschreibung: "Nur vom besten", preis: 1.30, art: "wasser" };
    //Softdrink
    const artikel8 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Softdrinks/softdrink1.jpg", name: "Softdrink1", beschreibung: "Mir gefällt besonders dies", preis: 1.20, art: "softdrink" };
    const artikel9 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Softdrinks/softdrink2.jpg", name: "Softdrink2", beschreibung: "Für die heißen Sommertage", preis: 2.00, art: "softdrink" };
    const artikel10 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Softdrinks/softdrink3.jpg", name: "Softdrink3", beschreibung: "Am besten gekühlt", preis: 1.99, art: "softdrink" };
    const artikel11 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Softdrinks/softdrink4.jpg", name: "Softdrink4", beschreibung: "Süße erfrischung!", preis: 1.30, art: "softdrink" };
    const artikel12 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Softdrinks/softdrink5.png", name: "Softdrink5", beschreibung: "Das beste Softgetränk", preis: 0.99, art: "softdrink" };
    const artikel13 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Softdrinks/softdrink6.jpg", name: "Softdrink5", beschreibung: "Das 2t beste Softgetränk", preis: 1.00, art: "softdrink" };
    const artikel14 = { bild: "/gis_SoSe2020/Aufgabe07/Bilder/Getränkbilder/Softdrinks/softdrink7.jpg", name: "Softdrink5", beschreibung: "Das 3t beste Softgetränk", preis: 1.30, art: "softdrink" };
    //In array speichern
    Aufgabe06.artikelArray = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6, artikel7, artikel8, artikel9, artikel10, artikel11, artikel12, artikel13, artikel14];
    Aufgabe06.jsonArtikelArray = JSON.stringify(Aufgabe06.artikelArray);
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=produktInformation.js.map