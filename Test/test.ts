async function communicate(_url: RequestInfo): Promise<void> {
  let response: Response = await fetch(_url);
  let text: String = await response.text();
  console.log("Response", text);
  
}

async function penis(): Promise<void> {

  console.log("vorher");
  await communicate("https://hs-furtwangen.github.io/GIS-SoSe-2020/L07/test.txt");
  console.log("nacher");

}


penis();
