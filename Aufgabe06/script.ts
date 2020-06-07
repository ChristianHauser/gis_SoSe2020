namespace Aufgabe06 {
    
    let counterstart: number = 0;
    const counter: HTMLElement = document.getElementById("counter") as HTMLDivElement;

    //Klasse Inhalt
    let divinhalt: HTMLElement = document.createElement("div");
    divinhalt.setAttribute("class", "inhalt");
    
    // H2 Titel wasser mit ID
    let produktTitel: HTMLElement = document.createElement("h2");
    produktTitel.setAttribute("id", "wasserlink");
    produktTitel.innerHTML = "Wasser";
    divinhalt.appendChild(produktTitel);

    //Klasse wasser
    let wasserdiv: HTMLElement = document.createElement("div");
    wasserdiv.setAttribute("class", "wasser");
    divinhalt.appendChild(wasserdiv);

    let summe: number = 0;
    let zahler: number = 0;
    //Schleife die den array mit den Artikeln komplett durchgeht. 
    for (let i: number = 0; i < mineralWasser.length; i++) {

        //Jeder neue Artikel wird in Klasse artikel gespeichern
        let divElement: HTMLElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        wasserdiv.appendChild(divElement);

        //Bild hinzufügen
        let bildElement: HTMLElement = document.createElement("img");
        bildElement.setAttribute("src", mineralWasser[i].bild);
        divElement.appendChild(bildElement);

        //Titel hinzufügen
        let titelElement: HTMLElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = mineralWasser[i].name;

        //Beschreibung hinzufügen
        let beschreibungelement: HTMLElement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = mineralWasser[i].beschreibung;

        //Preis hinzufügen
        let preiselement: HTMLElement = document.createElement("i");
        divElement.appendChild(preiselement );
        preiselement.innerHTML = mineralWasser[i].preis.toString() + "€";
        

        //Br tags
        let brelement: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement);

        let brelement2: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement2);

        //Kaufen Button
        let buttonElement: HTMLElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        
        divElement.appendChild(buttonElement);
        buttonElement.addEventListener("click", wasserPreis);

        function wasserPreis(_event: Event): void {
            summe = summe + mineralWasser[i].preis;
            summe = summe * 1000;
            summe = summe / 1000;
            console.log("Gesamtsumme: " + summe + " €");
             }

       
    }

    //H2 softdrinkt Titel mit ID
    let softdrinktTitel: HTMLElement = document.createElement("h2");
    softdrinktTitel.setAttribute("id", "softdrinktlink");
    softdrinktTitel.innerHTML = "Softdrink";
    divinhalt.appendChild(softdrinktTitel);

    //neue Klasse softdrinkt
    let softdrinktdiv: HTMLElement = document.createElement("div");
    softdrinktdiv.setAttribute("class", "softdrinkt");
    divinhalt.appendChild(softdrinktdiv);


    //Wiederholung der Schritte
    for (let i: number = 0; i < softDrinks.length; i++) {

        let divElement: HTMLElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        softdrinktdiv.appendChild(divElement);

        let bildElement: HTMLElement = document.createElement("img");
        bildElement.setAttribute("src", softDrinks[i].bild);
        divElement.appendChild(bildElement);

        let titelElement: HTMLElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = softDrinks[i].name;

        let beschreibungelement: HTMLElement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = softDrinks[i].beschreibung;

        let preiselement: HTMLElement = document.createElement("i");
        divElement.appendChild(preiselement);
        
        preiselement.innerHTML = softDrinks[i].preis.toString() + "€";

        
        let brelement: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement);

        let brelement2: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement2);

        let buttonElement: HTMLElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        divElement.appendChild(buttonElement);
        
        divElement.appendChild(buttonElement);
        buttonElement.addEventListener("click", softdrinkPreis);

        

        function softdrinkPreis(_event: Event): void {

            summe = summe + softDrinks[i].preis;
            summe = summe * 1000;
            summe = summe / 1000;
            console.log("Gesamtsumme=" + summe + "€");
            
        }
        


    }

    function counterCounter(_event: Event): void{

        counterstart++;
        counter.innerHTML = "" + counterstart;

    }

    
    

    
//Gesamter Inhalt in main tag
    document.getElementById("main")?.appendChild(divinhalt);
}