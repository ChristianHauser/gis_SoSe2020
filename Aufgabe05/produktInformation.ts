namespace Aufgabe5 {
    //Interface erstellen
    export interface Artikel {
        bild: string;
        name: string;
        beschreibung: string;
        preis: string;
        
    }

    //Wasser
    const wasser1: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Mineralwasser/wasser1.png" , name: "Superwasser", beschreibung: "Extremwasser.", preis: "1,00€"};
    const wasser2: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Mineralwasser/wasser2.png", name: "Wasser Super", beschreibung: "Wow was für tolles Wasser", preis: "2,00€"};
    const wasser3: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Mineralwasser/wasser3.png", name: "Tolles Wasser", beschreibung: "Erfrischend Prickelnd", preis: "1,30€"};
    const wasser4: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Mineralwasser/wasser4.png", name: "Wasserrrr", beschreibung: "Neu jetzt in Medium!", preis: "1,19€"};
    const wasser5: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Mineralwasser/wasser5.jpg", name: "Waser", beschreibung: "MIt extra viel Kohlensäure", preis: "0,99€"};
    const wasser6: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Mineralwasser/wasser6.jpg", name: "Wasser", beschreibung: "Atmungsaktiv", preis: "2,00€"};
    const wasser7: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Mineralwasser/wasser7.jpg", name: "Wasser", beschreibung: "Nur vom besten", preis: "1,50€"};

    
   //Softdrink
    const softdrink1: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Softdrinks/softdrink1.jpg", name: "Softdrink1", beschreibung: "Mir gefällt besonders dies", preis: "1,20€"};
    const softdrink2: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Softdrinks/softdrink2.jpg", name: "Softdrink2", beschreibung: "Für die heißen Sommertage", preis: "2,00€"};
    const softdrink3: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Softdrinks/softdrink3.jpg", name: "Softdrink3", beschreibung: "Am besten gekühlt", preis: "1,99€"};
    const softdrink4: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Softdrinks/softdrink4.jpg", name: "Softdrink4", beschreibung: "Süße erfrischung!", preis: "1,10€"};
    const softdrink5: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Softdrinks/softdrink5.png", name: "Softdrink5", beschreibung: "Das beste Softgetränk", preis: "0,99€"};
    const softdrink6: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Softdrinks/softdrink6.jpg", name: "Softdrink5", beschreibung: "Das 2t beste Softgetränk", preis: "1,00€"};
    const softdrink7: Artikel = {bild: "/gis_SoSe2020/Aufgabe05/Bilder/Getränkbilder/Softdrinks/softdrink7.jpg", name: "Softdrink5", beschreibung: "Das 3t beste Softgetränk", preis: "1,30€"};


    //In array speichern
    export let mineralWasser: Artikel[] = [wasser1, wasser2, wasser3, wasser4, wasser5, wasser6, wasser7];
    export let softDrinks: Artikel[] = [softdrink1, softdrink2, softdrink3, softdrink4, softdrink5, softdrink6, softdrink7];
    }