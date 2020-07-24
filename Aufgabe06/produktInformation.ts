namespace Aufgabe07 {
    //Interface erstellen
    export interface EisArtikel {
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        art: string;
        
    }

    //eis
    const artikel1: EisArtikel = {bild: "/gis_SoSe2020/FinalesProjekt/Bilder/EisBilder/ErdbeerEis.png" , name: "Erdbeereis", beschreibung: "Extremeis.", preis: 1.00, art: "eis"};
    const artikel2: EisArtikel = {bild: "/gis_SoSe2020/FinalesProjekt/Bilder/EisBilder/SchokoEis.png", name: "eis Super", beschreibung: "Wow was für tolles eis", preis: 1.20, art: "eis"};
    const artikel3: EisArtikel = {bild: "/gis_SoSe2020/FinalesProjekt/Bilder/EisBilder/KirschEis.png", name: "Tolles eis", beschreibung: "Erfrischend Prickelnd", preis: 1.30, art: "eis"};
    const artikel4: EisArtikel = {bild: "/gis_SoSe2020/FinalesProjekt/Bilder/EisBilder/VanilleEis.png", name: "eisrrr", beschreibung: "Neu jetzt in Medium!", preis: 1.20, art: "eis"};
    

    

    //In array speichern
    export let artikelArray: EisArtikel[] = [artikel1, artikel2, artikel3, artikel4];
    
    }