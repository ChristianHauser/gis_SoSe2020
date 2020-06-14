"use strict";
async function communicate(_url) {
    let response = await fetch(_url);
    console.log("Response", response);
    let text, Promise;
    ({});
}
function handleFailure(_response) {
    console.log("Failure", _response);
}
function handleSuccess(_response) {
    console.log("Success", _response);
}
//# sourceMappingURL=test.js.map