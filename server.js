const next = require("next");
const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");

const ports = {
  http: 80,
  https: 443,
};
// const dev = process.env.NODE_ENV !== "production";
const app = next({ dev: false });
const handle = app.getRequestHandler();
const server = express();
const httpsApp = express();

const options = {
  key: fs.readFileSync("./cert/localhost.key"),
  cert: fs.readFileSync("./cert/localhost.crt"),
};

app.prepare().then(() => {
  httpsApp.get("*", (req, res) => handle(req, res));

  // server.get("*", (req, res) => {
  //   res.writeHead(302, {
  //     Location: "https://" + req.headers.host + req.url,
  //   });
  //   res.end();
  // });

  // https
  //   .createServer(options, httpsApp)
  //   .listen(ports.https, "0.0.0.0", (err) => {
  //     if (err) throw err;
  //     console.log(`> HTTPS Ready on https://localhost:${ports.https}`);
  //   });

  http.createServer(server).listen(ports.http, "0.0.0.0", (err) => {
    if (err) throw err;
    console.log(`> HTTP Ready on http://localhost:${ports.http}`);
  });
});
