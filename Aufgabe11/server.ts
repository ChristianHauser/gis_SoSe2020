import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
export namespace Aufgabe11 {
    
    console.log("funktionier");
    console.log("Starting server");
      //Port Number wird unter port gespeichert
    let port: number = Number(process.env.PORT);

    let orders: Mongo.Collection;
      //Wenn port nicht erreichbar, wird Wert 8100 vergeben
    if (!port)
        port = 8100;
    let dataBaseUrl: string = "mongodb+srv://benutzer:gis2020@gis2020christianhauser.6cf1l.mongodb.net/Test?retryWrites=true&w=majority";
    startServer(port);

    connectToDatabase(dataBaseUrl);
    //Server und Listener erstellen
    function startServer(_port: number | string): void {
      let server: Http.Server = Http.createServer();
      server.addListener("request", handleRequest);
      server.addListener("listening", handleListen);
      server.listen(_port);
    }

    async function connectToDatabase(_url: string): Promise <void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Test").collection("Students");
        console.log("Database connoection" , orders != undefined);
    }
    function handleListen(): void {
        console.log("Listening");
      }
      //Server Daten erhalten
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> {
        console.log("I hear voices!");
    
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
    
        if (_request.url) {
          let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
          let pfad: string | null = url.pathname;
          if (pfad == "/speichern") {
            orders.insertOne(url.query);
          } else if (pfad == "/holen") {
           
            _response.write(JSON.stringify(await orders.find().toArray()));
          }
        }
    
        _response.end();
      }

    
    }

