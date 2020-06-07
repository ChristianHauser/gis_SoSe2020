namespace Aufgabe06 {
    

    let summe: number = 0;
    let zahler: number = 0;

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


    //Schleife die den array mit den Artikeln komplett durchgeht. 
    for (let i: number = 0; i < artikelArray.length; i++) {

        //Jeder neue Artikel wird in Klasse artikel gespeichern
        let divElement: HTMLElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        wasserdiv.appendChild(divElement);

        //Bild hinzufügen
        let bildElement: HTMLElement = document.createElement("img");
        bildElement.setAttribute("src", artikelArray[i].bild);
        divElement.appendChild(bildElement);

        //Titel hinzufügen
        let titelElement: HTMLElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = artikelArray[i].name;

        //Beschreibung hinzufügen
        let beschreibungelement: HTMLElement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = artikelArray[i].beschreibung;

        //Preis hinzufügen
        let preiselement: HTMLElement = document.createElement("i");
        divElement.appendChild(preiselement );
        preiselement.innerHTML = artikelArray[i].preis.toString() + "€";
        

        //Br tags
        let brelement: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement);

        let brelement2: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement2);

        //Kaufen Button
        let buttonElement: HTMLElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        divElement.appendChild(buttonElement);
        buttonElement.addEventListener("click", counterbutton);

        function artikelsumme(_event: Event): void {
            summe = summe + artikelArray[i].preis;
            console.log("Gesamtsumme: " + summe + " €");
             }
    }
    

    
    let kreisElement: HTMLElement = document.createElement("div");
    kreisElement.innerHTML = (zahler.toString());
    divElement.appendChild(kreisElement);
    
    function counterbutton(_event: Event): void {

        console.log(artikelArray[0].preis);
        
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
    for (let i: number = 0; i < artikelArray.length; i++) {

        let divElement: HTMLElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        softdrinktdiv.appendChild(divElement);

        let bildElement: HTMLElement = document.createElement("img");
        bildElement.setAttribute("src", artikelArray[i].bild);
        divElement.appendChild(bildElement);

        let titelElement: HTMLElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = artikelArray[i].name;

        let beschreibungelement: HTMLElement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = artikelArray[i].beschreibung;

        let preiselement: HTMLElement = document.createElement("i");
        divElement.appendChild(preiselement);
        
        preiselement.innerHTML = artikelArray[i].preis.toString() + "€";

        
        let brelement: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement);

        let brelement2: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement2);

        let buttonElement: HTMLElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        divElement.appendChild(buttonElement);
    }
//Gesamter Inhalt in main tag
    document.getElementById("main")?.appendChild(divinhalt);
}