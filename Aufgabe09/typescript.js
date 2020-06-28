"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let buttonjson = document.getElementById("button1");
    buttonjson.addEventListener("click", handlejson);
    let buttonhtml = document.getElementById("button2");
    buttonhtml.addEventListener("click", handlehtml);
    let server = document.getElementById("server");
    async function handlehtml() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020chris.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        let server = document.getElementById("server");
        server.innerHTML = responseText;
    }
    async function handlejson() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020chris.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        let responseJSON = JSON.parse(responseText);
        console.log(responseJSON);
        console.log(responseText);
        server.innerHTML = responseText;
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=typescript.js.map