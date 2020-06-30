"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let buttonhtml = document.getElementById("button1");
    buttonhtml.addEventListener("click", handleHTML);
    let buttonjson = document.getElementById("button2");
    buttonjson.addEventListener("click", handleJSON);
    async function handleHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020chris.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/html" + "?" + query.toString();
        let response = await fetch(url);
        let responseString = await response.text();
        let serverResponse = document.getElementById("anzeige");
        serverResponse.innerHTML = responseString;
    }
    async function handleJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020chris.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/json" + "?" + query.toString();
        let response = await fetch(url);
        let responseString = await response.json();
        console.log(responseString);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=typescript.js.map