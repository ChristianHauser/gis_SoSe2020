namespace FinalesProjekt {


    let loeschButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button2");
    loeschButton.addEventListener("click", handleLoeschen);

    async function handleLoeschen (): Promise <void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020chris.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/senden" + "?" + query.toString();
        await fetch (url);
    }


}


