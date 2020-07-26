"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinalesProjekt = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var FinalesProjekt;
(function (FinalesProjekt) {
    let lieferinformationen;
    let databaseUrl = "mongodb+srv://benutzer:gis123@gis2020christianhauser.6cf1l.mongodb.net/Finale?retryWrites=true&w=majority";
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    connectToDatabase(databaseUrl);
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        lieferinformationen = mongoClient.db("Finale").collection("Lieferinformationen");
        console.log("Database connection ", lieferinformationen != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    //Server Daten erhalten
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/senden")
                lieferinformationen.insertOne(url.query);
            else if (url.pathname == "/getten") {
                _response.write(JSON.stringify(await lieferinformationen.find().toArray()));
            }
        }
        _response.end();
    }
})(FinalesProjekt = exports.FinalesProjekt || (exports.FinalesProjekt = {}));
//# sourceMappingURL=server.js.map