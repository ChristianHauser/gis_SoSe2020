"use strict";
var FinalesProjekt;
(function (FinalesProjekt) {
    let loeschButton = document.getElementById("button2");
    loeschButton.addEventListener("click", handleLoeschen);
    async function handleLoeschen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020chris.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/senden" + "?" + query.toString();
        await fetch(url);
    }
})(FinalesProjekt || (FinalesProjekt = {}));
//# sourceMappingURL=bestellungen.js.map