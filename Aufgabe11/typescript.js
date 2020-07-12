"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let buttonhtml = document.getElementById("button1");
    buttonhtml.addEventListener("click", handleHTML);
    let buttonjson = document.getElementById("button2");
    buttonjson.addEventListener("click", handleJSON);
    async function handleHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020chris.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/speichern" + "?" + query.toString();
        await fetch(url);
    }
    async function handleJSON() {
        let anzeige = document.getElementById("anzeige");
        let url = "https://gissose2020chris.herokuapp.com";
        url = url + "/holen";
        let antwort = await fetch(url);
        let antworttext = await antwort.text();
        anzeige.innerHTML = antworttext;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=typescript.js.map