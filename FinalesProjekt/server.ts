import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
export namespace FinalesProjekt {
      
      let lieferinformationen: Mongo.Collection;
      let databaseUrl: string = "mongodb+srv://benutzer:gis123@gis2020christianhauser.6cf1l.mongodb.net/Finale?retryWrites=true&w=majority";
      
      

      console.log("Starting server");
      
      let port: number = Number(process.env.PORT);
      
      if (!port)
        port = 8100;

      
      connectToDatabase(databaseUrl);
     
     
    
    
      
      let server: Http.Server = Http.createServer();
      server.addListener("request", handleRequest);
      server.addListener("listening", handleListen);
      server.listen(port);
      
      
      async function connectToDatabase(_url: string): Promise<void> {
          let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
          let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
          await mongoClient.connect();

          lieferinformationen = mongoClient.db("Finale").collection("Lieferinformationen");
          console.log("Database connection ", lieferinformationen != undefined);
      }



      function handleListen(): void {
        console.log("Listening");
      }


      //Server Daten erhalten
      async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> {
        
    
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
    
        if (_request.url) {
          let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
          
          if (url.pathname == "/senden") 
            lieferinformationen.insertOne(url.query);
          

             else if (url.pathname == "/getten") {
          
             
              _response.write(JSON.stringify(await lieferinformationen.find().toArray()));
          
        } 
        }
    
        _response.end();
          }
        
        
        }