"use strict";
async function communicate(_url) {
    let response = await fetch(_url);
    let text = await response.text();
    console.log("Response", text);
}
async function penis() {
    console.log("vorher");
    await communicate("https://hs-furtwangen.github.io/GIS-SoSe-2020/L07/test.txt");
    console.log("nacher");
}
penis();
//# sourceMappingURL=test.js.map