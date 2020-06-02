var Aufgabe5;
(function (Aufgabe5) {
    
    let divinhalt = document.createElement("div");
    divinhalt.setAttribute("class", "inhalt");
    
    let kleidungtitel = document.createElement("h2");
    kleidungtitel.setAttribute("id", "Kleidunglink");
    kleidungtitel.innerHTML = "Kleidung";
    divinhalt.appendChild(kleidungtitel);
    
    let kleidungdiv = document.createElement("div");
    kleidungdiv.setAttribute("class", "Kleidung");
    divinhalt.appendChild(kleidungdiv);
     
    for (let i = 0; i < Aufgabe5.artikelkleidung.length; i++) {
        
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        kleidungdiv.appendChild(divElement);
        
        let bildElement = document.createElement("img");
        bildElement.setAttribute("src", Aufgabe5.artikelkleidung[i].bild);
        divElement.appendChild(bildElement);
        
        let titelElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = Aufgabe5.artikelkleidung[i].name;
        
        let beschreibungelement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = Aufgabe5.artikelkleidung[i].beschreibung;
        
        let preiselement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = Aufgabe5.artikelkleidung[i].preis;
        
        let brelement = document.createElement("br");
        divElement.appendChild(brelement);
        let brelement2 = document.createElement("br");
        divElement.appendChild(brelement2);
        
        let buttonElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        divElement.appendChild(buttonElement);
    }
    
    let equipmentTitel = document.createElement("h2");
    equipmentTitel.setAttribute("id", "Equipmentlink");
    equipmentTitel.innerHTML = "Equipment";
    divinhalt.appendChild(equipmentTitel);
    
    let equipmentdiv = document.createElement("div");
    equipmentdiv.setAttribute("class", "Equipment");
    divinhalt.appendChild(equipmentdiv);
    
    for (let i: number = 0; i < Aufgabe5.artikelequipment.length; i++) {
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        equipmentdiv.appendChild(divElement);
        let bildElement = document.createElement("img");
        bildElement.setAttribute("src", Aufgabe5.artikelequipment[i].bild);
        divElement.appendChild(bildElement);
        let titelElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = Aufgabe5.artikelequipment[i].name;
        let beschreibungelement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = Aufgabe5.artikelequipment[i].beschreibung;
        let preiselement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = Aufgabe5.artikelequipment[i].preis;
        let brelement = document.createElement("br");
        divElement.appendChild(brelement);
        let brelement2 = document.createElement("br");
        divElement.appendChild(brelement2);
        let buttonElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        divElement.appendChild(buttonElement);
    }
    
    document.getElementById("main")?.appendChild(divinhalt);
})(Aufgabe5 || (Aufgabe5 = {}));
