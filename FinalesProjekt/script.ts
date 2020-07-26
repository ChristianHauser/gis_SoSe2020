namespace FinalesProjekt {

    generateArtikle();
    export async function generateArtikle(): Promise<void> {
        await handleData("eisArtikel.json");
        machmeineseite();

    }
    let summe: number = 0;
    let warenKorbArtikel: EisArtikel[] = [];
    let counterstart: number = 0;
    const counter: HTMLElement = document.getElementById("counter") as HTMLDivElement;
    const preisStartSeite: HTMLElement = document.getElementById("preisStartSeite") as HTMLDivElement;

    let waffelCounter: number = 0;
    let eisSortenCounter: number = 0;
    let toppingsCounter: number = 0;


    let eisDivInhalt: HTMLElement = document.createElement("div");
    eisDivInhalt.setAttribute("class", " EisDivBilder");
    document.querySelector(".EisInhalt")?.appendChild(eisDivInhalt);
    
    
   

    //Klasse Inhalt
    let divinhalt: HTMLElement = document.createElement("div");
    divinhalt.setAttribute("id", "inhalt");

    
    let produktTitel: HTMLElement = document.createElement("h2");
    produktTitel.setAttribute("id", "ueberschrift1");
    produktTitel.innerHTML = "Waffel oder Becher?";
    divinhalt.appendChild(produktTitel);

    
    let neuediv: HTMLElement = document.createElement("div");
    neuediv.setAttribute("id", "neueDiv");
    divinhalt.appendChild(neuediv);

    

    //H2 eis Titel mit ID
    let eisTitel: HTMLElement = document.createElement("h2");
    eisTitel.setAttribute("id", "eislink");
    eisTitel.innerHTML = "Eissorten";
    divinhalt.appendChild(eisTitel);

    //neue Klasse eis
    let eisdiv: HTMLElement = document.createElement("div");
    eisdiv.setAttribute("id", "eis");
    divinhalt.appendChild(eisdiv);

    let toppingsTitel: HTMLElement = document.createElement("h2");
    toppingsTitel.setAttribute("id", "toppingslink");
    toppingsTitel.innerHTML = "Toppings";
    divinhalt.appendChild(toppingsTitel);
    

    let toppingsDiv: HTMLElement = document.createElement("div");
    toppingsDiv.setAttribute("id", "ttoppings");
    divinhalt.appendChild(toppingsDiv);

    //Schleife die den array mit den Artikeln komplett durchgeht. 
    function machmeineseite(): void {

        let loeschButton: HTMLElement = document.createElement("button");
        loeschButton.innerHTML = "Bestellung verwerfen";
        divinhalt.appendChild(loeschButton);
        loeschButton.addEventListener("click", handleNeueBestellung);
        console.log("hallo");
        for (let i: number = 0; i < artikelArrayy.length; i++) {
            if (artikelArrayy[i].art == "WaffelOderBecher") {
                //Jeder neue Artikel wird in Klasse artikel gespeichern
                let divElement: HTMLElement = document.createElement("div");
                divElement.setAttribute("class", "artikel");
                eisDivInhalt.appendChild(divElement);

                console.log("hallo");

                //Bild hinzufügen
                let bildElement: HTMLElement = document.createElement("img");
                bildElement.setAttribute("src", artikelArrayy[i].bild);
                divElement.appendChild(bildElement);

                //Titel hinzufügen
                let titelElement: HTMLElement = document.createElement("h3");
                divElement.appendChild(titelElement);
                titelElement.innerHTML = artikelArrayy[i].name;

                //Beschreibung hinzufügen
                let beschreibungelement: HTMLElement = document.createElement("p");
                divElement.appendChild(beschreibungelement);
                beschreibungelement.innerHTML = artikelArrayy[i].beschreibung;

                //Preis hinzufügen
                let preiselement: HTMLElement = document.createElement("i");
                divElement.appendChild(preiselement);
                preiselement.innerHTML = artikelArrayy[i].preis.toString() + "€";


                //Br tags
                let brelement: HTMLElement = document.createElement("br");
                divElement.appendChild(brelement);

                let brelement2: HTMLElement = document.createElement("br");
                divElement.appendChild(brelement2);

                //Kaufen Button
                let buttonElement: HTMLElement = document.createElement("button");
                buttonElement.innerHTML = "Kaufen";

                divElement.appendChild(buttonElement);

                buttonElement.addEventListener("click", handleWaffelHinzuegen);
                buttonElement.addEventListener("click", handleToppinsHinzufuegen);
                buttonElement.addEventListener("click", handleEisHinzufuegen);

            } else if (artikelArrayy[i].art == "eis") {
                //Wiederholung der Schritte

                let divElement: HTMLElement = document.createElement("div");
                divElement.setAttribute("id", "soft");
                eisdiv.appendChild(divElement);


                let bildElement: HTMLElement = document.createElement("img");
                bildElement.setAttribute("src", artikelArrayy[i].bild);
                divElement.appendChild(bildElement);

                let titelElement: HTMLElement = document.createElement("h3");
                divElement.appendChild(titelElement);
                titelElement.innerHTML = artikelArrayy[i].name;

                let beschreibungelement: HTMLElement = document.createElement("p");
                divElement.appendChild(beschreibungelement);
                beschreibungelement.innerHTML = artikelArrayy[i].beschreibung;

                let preiselement: HTMLElement = document.createElement("i");
                divElement.appendChild(preiselement);
                preiselement.innerHTML = artikelArrayy[i].preis.toString() + "€";

                let brelement: HTMLElement = document.createElement("br");
                divElement.appendChild(brelement);

                let brelement2: HTMLElement = document.createElement("br");
                divElement.appendChild(brelement2);

                let buttonElement: HTMLElement = document.createElement("button");
                buttonElement.innerHTML = "Kaufen";
                divElement.appendChild(buttonElement);

                buttonElement.addEventListener("click", handleWaffelHinzuegen);
                buttonElement.addEventListener("click", handleToppinsHinzufuegen);
                buttonElement.addEventListener("click", handleEisHinzufuegen);



            } else if (artikelArrayy[i].art == "Toppings") {

                let divElement: HTMLElement = document.createElement("div");
                divElement.setAttribute("id", "toppings");
                toppingsDiv.appendChild(divElement);


                let bildElement: HTMLElement = document.createElement("img");
                bildElement.setAttribute("src", artikelArrayy[i].bild);
                divElement.appendChild(bildElement);

                let titelElement: HTMLElement = document.createElement("h3");
                divElement.appendChild(titelElement);
                titelElement.innerHTML = artikelArrayy[i].name;

                let beschreibungelement: HTMLElement = document.createElement("p");
                divElement.appendChild(beschreibungelement);
                beschreibungelement.innerHTML = artikelArrayy[i].beschreibung;

                let preisElement: HTMLElement = document.createElement("i");
                divElement.appendChild(preisElement);
                preisElement.innerHTML = artikelArrayy[i].preis.toString() + "€";

                let brelement: HTMLElement = document.createElement("br");
                divElement.appendChild(brelement);

                let brelement2: HTMLElement = document.createElement("br");
                divElement.appendChild(brelement2);

                let buttonElement: HTMLElement = document.createElement("button");
                buttonElement.innerHTML = "Kaufen";
                divElement.appendChild(buttonElement);

                buttonElement.addEventListener("click", handleWaffelHinzuegen);
                buttonElement.addEventListener("click", handleToppinsHinzufuegen);
                buttonElement.addEventListener("click", handleEisHinzufuegen);
            }



            

            function handleWaffelHinzuegen(_event: Event): void {
                if (waffelCounter < 1 && artikelArrayy[i].art == "WaffelOderBecher") {
                    let eisBild: HTMLImageElement = document.createElement("img");
                    eisBild.setAttribute("id", "waffelAnzeigen");
                    eisBild.setAttribute("src", artikelArrayy[i].bild);

                    (<HTMLDivElement>document.querySelector(".menu .EisDivBilder")).append(eisBild);
                    warenKorbArtikel.push(artikelArrayy[i]);
                    localStorage.setItem("artikel_name" + (warenKorbArtikel.length - 1), artikelArrayy[i].name);
                    localStorage.setItem("artikel_preis" + (warenKorbArtikel.length - 1), artikelArrayy[i].preis.toString());
                    localStorage.setItem("artikel_beschreibung" + (warenKorbArtikel.length - 1), artikelArrayy[i].beschreibung);
                    localStorage.setItem("artikel_bild" + (warenKorbArtikel.length - 1), artikelArrayy[i].bild);
                    localStorage.setItem("anzahlArtikel", warenKorbArtikel.length.toString());

                    console.log("Gesamtsumme=" + summe + "€");
                    counterstart++;
                    counter.innerHTML = `${counterstart}`;
                    preisStartSeite.innerHTML = `${summe.toFixed(2)} €`;
                    waffelCounter++;
                    summe = summe + artikelArrayy[i].preis;
                    preisStartSeite.innerHTML = `${summe.toFixed(2)} €`;

                }


            }

            function handleToppinsHinzufuegen(_event: Event): void {

                if (toppingsCounter < 4 && artikelArrayy[i].art == "Toppings") {

                    let eisBild: HTMLImageElement = document.createElement("img");
                    eisBild.setAttribute("id", "toppingsAnzeigen");
                    eisBild.setAttribute("src", artikelArrayy[i].bild);
                    (<HTMLDivElement>document.querySelector(".menu .EisDivBilder")).append(eisBild);
                    warenKorbArtikel.push(artikelArrayy[i]);
                    localStorage.setItem("artikel_name" + (warenKorbArtikel.length - 1), artikelArrayy[i].name);
                    localStorage.setItem("artikel_preis" + (warenKorbArtikel.length - 1), artikelArrayy[i].preis.toString());
                    localStorage.setItem("artikel_beschreibung" + (warenKorbArtikel.length - 1), artikelArrayy[i].beschreibung);
                    localStorage.setItem("artikel_bild" + (warenKorbArtikel.length - 1), artikelArrayy[i].bild);
                    localStorage.setItem("anzahlArtikel", warenKorbArtikel.length.toString());

                    console.log("Gesamtsumme=" + summe + "€");
                    counterstart++;
                    counter.innerHTML = `${counterstart}`;
                    summe = summe + artikelArrayy[i].preis;
                    preisStartSeite.innerHTML = `${summe.toFixed(2)} €`;
                    toppingsCounter++;
                }

            }


            function handleEisHinzufuegen(_event: Event): void {

                if (eisSortenCounter < 7 && artikelArrayy[i].art == "eis") {
                    let eisBild: HTMLImageElement = document.createElement("img");
                    eisBild.setAttribute("id", "eisAnzeigen");
                    eisBild.setAttribute("src", artikelArrayy[i].bild);
                    

                    (<HTMLDivElement>document.querySelector(".menu .EisDivBilder")).append(eisBild);
                    warenKorbArtikel.push(artikelArrayy[i]);
                    localStorage.setItem("artikel_name" + (warenKorbArtikel.length - 1), artikelArrayy[i].name);
                    localStorage.setItem("artikel_preis" + (warenKorbArtikel.length - 1), artikelArrayy[i].preis.toString());
                    localStorage.setItem("artikel_beschreibung" + (warenKorbArtikel.length - 1), artikelArrayy[i].beschreibung);
                    localStorage.setItem("artikel_bild" + (warenKorbArtikel.length - 1), artikelArrayy[i].bild);
                    localStorage.setItem("anzahlArtikel", warenKorbArtikel.length.toString());

                    console.log("Gesamtsumme=" + summe + "€");
                    counterstart++;
                    counter.innerHTML = `${counterstart}`;
                    summe = summe + artikelArrayy[i].preis;
                    preisStartSeite.innerHTML = `${summe.toFixed(2)} €`;
                    eisSortenCounter++;


                }
            }

            //Gesamter Inhalt in main tag
            document.getElementById("main")?.appendChild(divinhalt);
        }

        function handleNeueBestellung(_event: Event): void {
            
            for (let i: number = 0; i < 12; i++) {
            document.getElementById("toppingsAnzeigen")?.remove();
            document.getElementById("eisAnzeigen")?.remove();
            document.getElementById("waffelAnzeigen")?.remove();
            
            }
            waffelCounter = 0;
            eisSortenCounter = 0;
            toppingsCounter = 0;
            summe = 0;
            counterstart = 0;
            counter.innerHTML = `${counterstart}`;
            
            preisStartSeite.innerHTML = `${summe.toFixed(2)} €`;
            localStorage.clear();

        }

        

        let buttonhtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button1");
        buttonhtml.addEventListener("click", handleHTML);

        let buttonjson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button2");
        buttonjson.addEventListener("click", handleJSON);

        //HEROKU ANBINDUNG
        async function handleHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020chris.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/speichern" + "?" + query.toString();
        await fetch(url);
    }


        async function handleJSON(): Promise<void> {
        let anzeige: HTMLElement = <HTMLElement>document.getElementById("anzeige");
        let url: string = "https://gissose2020chris.herokuapp.com";
        url = url + "/holen";
       
        let antwort: Response = await fetch(url);
        let antworttext: string = await antwort.text();
        anzeige.innerHTML = antworttext;
       
        }
    }
}



