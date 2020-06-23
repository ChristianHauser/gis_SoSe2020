namespace Aufgabe08 {
    //Interface erstellen
    export interface Artikel {
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        art: string;
        
    }

   

    //In array speichern
    export let artikelArray: Artikel[] = [];
    export async function handleData(_url: RequestInfo): Promise<void> {

        let re1: Response = await fetch(_url);
        let re2: JSON = await re1.json();
        //Einlesen von artikelArray aus der json datei 
        artikelArray = JSON.parse(JSON.stringify(re2));

    }
    export let jsonArtikelArray: String = JSON.stringify(artikelArray);
    
    localStorage.setItem("jsonArtikelArray", jsonArtikelArray + "");
    }