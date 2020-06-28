"use strict";
var Aufgabe9;
(function (Aufgabe9) {
    let buttonhtml = document.getElementById("button1");
    buttonhtml.addEventListener("click", buttonclickhtml);
    let buttonjson = document.getElementById("button2");
    buttonjson.addEventListener("click", buttonclickjson);
    async function buttonclickhtml() {
        let formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url = "https://gissose2020chris.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/html" + "?" + query.toString();
        let response = await fetch(url);
        let responseString = await response.text();
        let serverResponse = document.getElementById("anzeige");
        serverResponse.innerHTML = responseString;
    }
    async function buttonclickjson() {
        let formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url = "https://gissose2020chris.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/json" + "?" + query.toString();
        await fetch(url);
        for (let entry of query) {
            console.log(entry);
            console.log("Objekt: " + entry[0] + " Wert:" + entry[1]);
        }
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=typescript.js.map