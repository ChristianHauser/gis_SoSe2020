namespace Aufgabe10 {

    let buttonhtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button1");
    buttonhtml.addEventListener("click", handleHTML);

    let buttonjson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button2");
    buttonjson.addEventListener("click", handleJSON);


    async function handleHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        
        let url: string = "https://gissose2020chris.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html" + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("anzeige");        
        serverResponse.innerHTML = responseString;

    }


    async function handleJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        
        
        let url: string = "https://gissose2020chris.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json" + "?" + query.toString();
        await fetch(url);
        for (let entry of query) {
            console.log(entry);
            console.log("Objekt: " + entry[0] + " Wert:" + entry[1]);
        }
      
    }

}