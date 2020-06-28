"use strict";
var namespace09;
(function (namespace09) {
    document.getElementById("button1")?.addEventListener("click", htmlausgabebutton);
    document.getElementById("button2")?.addEventListener("click", consolenausgabebutton);
    function senden() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020chris.herokuapp.com";
        //let url: string = "http://localhost:8100/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        return url;
    }
    // ansteuerung des 1 Buttons 
    async function consolenausgabebutton() {
        consolenausgabe(await splitrequest(senden()));
    }
    // ansteuerung des 2 Buttons 
    async function htmlausgabebutton() {
        htmlausgabe(await splitrequest(senden()));
    }
    // ausgabe des Strngs als html 
    function htmlausgabe(_arraysplit) {
        document.getElementById("anzeige").innerHTML = _arraysplit[0];
    }
    // ausgebe der json in der Console
    function consolenausgabe(_arraysplit) {
        let ausgabe = JSON.parse(_arraysplit[1]);
        console.log(ausgabe);
    }
    // die response an der verhervestgelekten teil trennen 
    async function splitrequest(_url) {
        let response = await fetch(_url);
        let response2 = await response.text();
        let arrayrequest = response2.split("&&");
        return arrayrequest;
    }
})(namespace09 || (namespace09 = {}));
//# sourceMappingURL=typescript.js.map