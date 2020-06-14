async function communicate(_url: RequestInfo): Promise<void> {
  let response: Response = await fetch(_url);
  
  console.log("Response", response);
  let text: (response): Promise<void>{
    
  } 
}
  
function handleFailure(_response: Response): void {
    console.log("Failure", _response);
  }
  
function handleSuccess(_response: Response): void {
    console.log("Success", _response);
  }
  
