namespace Aufgabe08 {

    let summe: number = 0;
    let psumme: HTMLParagraphElement = document.createElement("p");
    let countTo: number = parseInt(localStorage.getItem("anzahlArtikel")!);

    createWarenkorbArtikel();
    function createWarenkorbArtikel(): void {
        for (let i: number = 0; i <= countTo - 1; i++) {

            let newDiv: HTMLElement = document.createElement("div");
            (<HTMLElement>document.getElementById("warenkorb")).appendChild(newDiv);
            newDiv.id = "divId" + i;
            console.log("divId" + i);

            //IMG IN DIV PACKEN
            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = localStorage.getItem("artikel_bild" + i)!;
            newDiv.appendChild(imgElement);
            console.log(imgElement);

            let name: HTMLParagraphElement = document.createElement("h1");
            name.innerHTML = localStorage.getItem("artikel_name" + i)!;
            newDiv.appendChild(name);

            let desc: HTMLParagraphElement = document.createElement("p");
            desc.innerHTML = localStorage.getItem("artikel_beschreibung" + i)!;
            newDiv.appendChild(desc);

             //PREIS
            let price: HTMLParagraphElement = document.createElement("p");
            price.innerHTML = localStorage.getItem("artikel_preis" + i)!;
            newDiv.setAttribute("preis", price.innerHTML);
            newDiv.appendChild(price);

            //BUTTON
            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "Löschen";
            newDiv.appendChild(kaufen);
            kaufen.addEventListener("click", handleRemoveArticle);

            //summe berechnen
            summe = summe + parseFloat(price.innerHTML);
            psumme.innerHTML = summe.toFixed(2) + "€";
            setsumme();
            
        }
        
        function handleRemoveArticle(_event: Event): void {
            //Gesampreis reduzieren
            let preisString: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!;
            summe = summe - parseFloat(preisString);
            psumme.innerHTML = summe.toFixed(2) + "€";
            setsumme();

            //Artikel Löschen
            ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
        }
        removeAll();
    }

    //summe in Header plazieren
    function setsumme(): void {
        document.getElementById("warenkorbWert")?.appendChild(psumme);
    }
    
    function removeAll(): void {
        let remButton: HTMLDListElement = (<HTMLDListElement>document.getElementById("liRemoveAll"));
        remButton.addEventListener("click", handleRemoveAll);
    }

    function handleRemoveAll(_event: Event): void {
            for (let index: number = 0; index <= countTo - 1; index++) {
                try {
                    (<HTMLDivElement>document.getElementById("divId" + index)).remove();
                } catch (error) {
                    console.log(error);
                    console.log("Artikel wurde zuvor von Hand gelöscht und kann nicht mehr gefunden werden");
                }
                psumme.innerHTML = 0 + "€";
                setsumme();
                localStorage.clear();
            }
    }

    console.log(localStorage);
}
        

