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

        let resp1: Response = await fetch(_url);
        let resp2: JSON = await resp1.json();
        //Einlesen von artikelArray aus der json datei 
        artikelArray = JSON.parse(JSON.stringify(resp2));

    }
    export let jsonArtikelArray: String = JSON.stringify(artikelArray);
    
    localStorage.setItem("jsonArtikelArray", jsonArtikelArray + "");
    }