namespace Aufgabe08 {

    generateArtikle();
    export async function generateArtikle(): Promise<void> {
        await handleData("artikel.json");
        machmeineseite();
        
    }
    let summe: number = 0;
    let warenKorbArtikel: Artikel[] = [];
    let counterstart: number = 0;
    const counter: HTMLElement = document.getElementById("counter") as HTMLDivElement;

    //Klasse Inhalt
    let divinhalt: HTMLElement = document.createElement("div");
    divinhalt.setAttribute("id", "inhalt");
    
    // H2 Titel wasser mit ID
    let produktTitel: HTMLElement = document.createElement("h2");
    produktTitel.setAttribute("id", "wasserlink");
    produktTitel.innerHTML = "Wasser";
    divinhalt.appendChild(produktTitel);

    //Klasse wasser
    let wasserdiv: HTMLElement = document.createElement("div");
    wasserdiv.setAttribute("id", "wasser");
    divinhalt.appendChild(wasserdiv);

     //H2 softdrinkt Titel mit ID
    let softdrinktTitel: HTMLElement = document.createElement("h2");
    softdrinktTitel.setAttribute("id", "softdrinktlink");
    softdrinktTitel.innerHTML = "Softdrink";
    divinhalt.appendChild(softdrinktTitel);

    //neue Klasse softdrinkt
    let softdrinktdiv: HTMLElement = document.createElement("div");
    softdrinktdiv.setAttribute("id", "softdrinkt");
    divinhalt.appendChild(softdrinktdiv);

    
   
    
    
    
    
    //Schleife die den array mit den Artikeln komplett durchgeht. 
    function machmeineseite(): void {
        
    console.log("hallo");
    for (let i: number = 0; i < artikelArray.length; i++) {


        
        
        if (artikelArray[i].art == "wasser") {
            //Jeder neue Artikel wird in Klasse artikel gespeichern
        let divElement: HTMLElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        wasserdiv.appendChild(divElement);
        
        console.log("hallo");

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
        buttonElement.addEventListener("click", handleClickStorage);

       
        

        
             
       
    } else {
        
   


    //Wiederholung der Schritte
    

    let divElement: HTMLElement = document.createElement("div");
    divElement.setAttribute("id", "soft");
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
        
    
    buttonElement.addEventListener("click", handleClickStorage );

    

    
}
          
        
        document.getElementById("supertolleid")?.addEventListener("click", handleSoft);

        function handleSoft(_event: Event): void {
    console.log("hallo");
    document.getElementById("wasser")!.setAttribute("style", "display: none");
    document.getElementById("wasserlink")!.setAttribute("style", "display: none");
    document.getElementById("softdrinkt")!.setAttribute("style", "visibility: visible");
    document.getElementById("softdrinktlink")!.setAttribute("style", "visibility: visible");
    

    

}

        document.getElementById("wassertolleid")?.addEventListener("click", handleWasser);

        function handleWasser(_event: Event): void {
         console.log("hallo");
         document.getElementById("softdrinkt")!.setAttribute("style", "display: none");
         document.getElementById("softdrinktlink")!.setAttribute("style" , "display: none");
         document.getElementById("wasser")!.setAttribute("style", "visibility: visible");
         document.getElementById("wasserlink")!.setAttribute("style", "visibility: visible");
}
         
        document.getElementById("allesid")?.addEventListener("click", handleAlles);

        function handleAlles(_event: Event): void {

             document.getElementById("inhalt")!.setAttribute("style", "visability: visible");

             document.getElementById("wasser")!.setAttribute("style", "visibility: visible");
             document.getElementById("wasserlink")!.setAttribute("style", "visibility: visible");
             document.getElementById("softdrinkt")!.setAttribute("style", "visibility: visible");
             document.getElementById("softdrinktlink")!.setAttribute("style", "visibility: visible");
        }                
        
        
        function handleClickStorage(_event: Event ): void {

            warenKorbArtikel.push(artikelArray[i]);
            localStorage.setItem("artikel_name" + (warenKorbArtikel.length - 1), artikelArray[i].name);
            localStorage.setItem("artikel_preis" + (warenKorbArtikel.length - 1), artikelArray[i].preis.toString());
            localStorage.setItem("artikel_beschreibung" + (warenKorbArtikel.length - 1), artikelArray[i].beschreibung);
            localStorage.setItem("artikel_bild" + (warenKorbArtikel.length - 1), artikelArray[i].bild);
            localStorage.setItem("anzahlArtikel", warenKorbArtikel.length.toString());

            summe = summe + artikelArray[i].preis;
            summe = summe * 1000;
            summe = summe / 1000;
            console.log("Gesamtsumme=" + summe + "€");
            counterstart++;
            counter.innerHTML = "" + counterstart;
            
            console.log(localStorage);

        }
        
        
    
//Gesamter Inhalt in main tag
        document.getElementById("main")?.appendChild(divinhalt);
}


}}


