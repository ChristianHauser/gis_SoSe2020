namespace Aufgabe07fertig {

    let summe: number = 0;
    let psumme: HTMLParagraphElement = document.createElement("p");
    let anzahlArtikel: number = parseInt(localStorage.getItem("anzahlArtikel")!);

    createWarenkorbArtikel();
    function createWarenkorbArtikel(): void {
        for (let i: number = 0; i <= anzahlArtikel - 1; i++) {

            let newDiv: HTMLElement = document.createElement("div");
            (<HTMLElement>document.getElementById("warenkorb")).appendChild(newDiv);
            newDiv.id = "divId" + i;
            
            //IMG IN DIV PACKEN
            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = localStorage.getItem("artikel_bild" + i)!;
            newDiv.appendChild(imgElement);
            

            let name: HTMLParagraphElement = document.createElement("h1");
            name.innerHTML = localStorage.getItem("artikel_name" + i)!;
            newDiv.appendChild(name);

             //PREIS
            let preiss: HTMLParagraphElement = document.createElement("p");
            preiss.innerHTML = localStorage.getItem("artikel_preis" + i)!;
            newDiv.setAttribute("preis", preiss.innerHTML);
            newDiv.appendChild(preiss);

            //BUTTON
            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "Löschen";
            newDiv.appendChild(kaufen);
            kaufen.addEventListener("click", handleRemoveArtikel);

            //summe berechnen
            summe = summe + parseFloat(preiss.innerHTML);
            psumme.innerHTML = summe.toFixed(2) + "€";
            setsumme();    
        }
        
        function handleRemoveArtikel(_event: Event): void {

            //Den Preis verringern
            let preisString: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!;
            summe = summe - parseFloat(preisString);
            psumme.innerHTML = summe.toFixed(2) + "€";
            setsumme();

            //Artikel Löschen
            ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
        }
        Clear();
    }
    
    //summe in Header plazieren
    function setsumme(): void {
        document.getElementById("warenkorbWert")?.appendChild(psumme);
    }
    
    function Clear(): void {
        let remButton: HTMLParagraphElement = (<HTMLParagraphElement>document.getElementById("clear"));
        remButton.addEventListener("click", handleClear);
    }

    function handleClear(_event: Event): void {
            for (let i: number = 0; i <= anzahlArtikel - 1; i++) {
                try {
                    (<HTMLDivElement>document.getElementById("divId" + i)).remove();
                } catch (error) {
                    console.log(error);                    
                }
                psumme.innerHTML = 0 + ".00€";
                setsumme();
                localStorage.clear();
            }
    }

    
}
        

