namespace FinalesProjekt {
    //Interface erstellen
    export interface EisArtikel {
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        art: string;
        
    }
    //In array speichern
    export let artikelArrayy: EisArtikel[] = [];
    export async function handleData(_url: RequestInfo): Promise<void> {

        let re1: Response = await fetch(_url);
        let re2: JSON = await re1.json();
        //Einlesen von artikelArray aus der json datei 
        artikelArrayy = JSON.parse(JSON.stringify(re2));

    }
    export let jsonArtikelArrayy: String = JSON.stringify(artikelArrayy);
    
    localStorage.setItem("jsonArtikelArray", jsonArtikelArrayy + "");
    }