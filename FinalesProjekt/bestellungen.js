"use strict";
var FinalesProjekt;
(function (FinalesProjekt) {
    let text = document.getElementById("paragraph");
    let loeschButton = document.getElementById("button2");
    loeschButton.addEventListener("click", handleLoeschen);
    async function handleLoeschen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020chris.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/getten" + "?" + query.toString();
        let response = await fetch(url);
        let responsetext = await response.text();
        text.innerHTML = responsetext;
    }
})(FinalesProjekt || (FinalesProjekt = {}));
//# sourceMappingURL=bestellungen.js.map