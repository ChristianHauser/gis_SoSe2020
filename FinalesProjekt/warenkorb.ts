namespace FinalesProjekt {

    let summe: number = 0;
    let psumme: HTMLParagraphElement = document.createElement("p");
    let anzahlArtikel: number = parseInt(localStorage.getItem("anzahlArtikel")!);

    createWarenkorbArtikel();
    function createWarenkorbArtikel(): void {

        let newDiv: HTMLElement = document.createElement("div");
        (<HTMLElement>document.getElementById("warenkorb")).appendChild(newDiv);
        newDiv.id = "divId" ;

        
        for (let i: number = 0; i <= anzahlArtikel - 1; i++) {

            if (i > 0) {
            let stringElement: HTMLParagraphElement = document.createElement("p");
            stringElement.innerHTML = ("+");
            newDiv.appendChild(stringElement);
            }
            
            
            //IMG IN DIV PACKEN
            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = localStorage.getItem("artikel_bild" + i )!;
            newDiv.appendChild(imgElement);
            

           

             //PREIS
            let preiss: HTMLParagraphElement = document.createElement("p");
            preiss.innerHTML = localStorage.getItem("artikel_preis" + i)!;
            newDiv.setAttribute("preis", preiss.innerHTML);
            newDiv.appendChild(preiss);

            //summe berechnen
            summe = summe + parseFloat(preiss.innerHTML);
            psumme.innerHTML = summe.toFixed(2) + "€";
            setsumme();   
            
            
            
            console.log(summe);
            
        }

        
        
        //BUTTON
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArtikel);
        function handleRemoveArtikel(_event: Event): void {

            //Den Preis verringern
            let preisString: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("warenkorbwert")!;
            summe = summe - parseFloat(preisString);
            psumme.innerHTML = "0" + "€";
            localStorage.clear();
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

    let formularButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button1");
    formularButton.addEventListener("click" , handleFormular);
    

    async function handleFormular (): Promise <void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020chris.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/senden" + "?" + query.toString();
        await fetch (url);
    }

    
    
}
        

