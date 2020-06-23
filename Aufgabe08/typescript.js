"use strict";
var AufgabeAcht;
(function (AufgabeAcht) {
    let button = document.getElementById("button");
    button.addEventListener("click", handleClick);
    function handleClick() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020chris.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        communicate(url);
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        let responseText = await response.text();
        console.log(responseText);
    }
})(AufgabeAcht || (AufgabeAcht = {}));
//# sourceMappingURL=typescript.js.map