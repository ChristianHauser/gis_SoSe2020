namespace AufgabeAcht {
  

let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button");
button.addEventListener("click", handleClick);

function handleClick(): void {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020chris.herokuapp.com";
        
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        communicate(url);
       
    }
async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response =  await fetch(_url);
        let responseText: string = await response.text();
        console.log(responseText);
    }
 
}