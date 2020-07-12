namespace Aufgabe11 {

    let buttonhtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button1");
    buttonhtml.addEventListener("click", handleHTML);

    let buttonjson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button2");
    buttonjson.addEventListener("click", handleJSON);


    async function handleHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020chris.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/speichern" + "?" + query.toString();
        await fetch(url);
    }


    async function handleJSON(): Promise<void> {
        let anzeige: HTMLElement = <HTMLElement>document.getElementById("anzeige");
        let url: string = "https://gissose2020chris.herokuapp.com";
        url = url + "/holen";
       
        let antwort: Response = await fetch(url);
        let antworttext: string = await antwort.text();
        anzeige.innerHTML = antworttext;
       
        }
    }

