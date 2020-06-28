namespace namespace09 {

    document.getElementById("button1")?.addEventListener("click", htmlausgabebutton);
    document.getElementById("button2")?.addEventListener("click", consolenausgabebutton);

    function senden(): string {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020chris.herokuapp.com";
        //let url: string = "http://localhost:8100/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        return url;
    }
    // ansteuerung des 1 Buttons 
    async function consolenausgabebutton(): Promise<void> {
        consolenausgabe(await splitrequest(senden()));
    }
    // ansteuerung des 2 Buttons 
    async function htmlausgabebutton(): Promise<void> {
        htmlausgabe( await splitrequest(senden()));
    }

    // ausgabe des Strngs als html 
    function htmlausgabe(_arraysplit: string[]): void {

        (<HTMLElement>document.getElementById("anzeige")).innerHTML  = _arraysplit[0];

    }
    // ausgebe der json in der Console
    function consolenausgabe(_arraysplit: string[]): void {
        let ausgabe: string = JSON.parse(_arraysplit[1]);
        console.log(ausgabe);
    }

    // die response an der verhervestgelekten teil trennen 
    async function splitrequest(_url: RequestInfo): Promise<string[]> {
        let response: Response = await fetch(_url);
        let response2: string = await response.text();
        let arrayrequest: string[] = response2.split("&&");
        return arrayrequest;
    }



}   