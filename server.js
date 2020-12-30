const next = require("next");
const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");

const ports = {
  http: 80,
  https: 443,
};
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

const options = {
  key: fs.readFileSync("./cert/localhost.key"),
  cert: fs.readFileSync("./cert/localhost.crt"),
};

app.prepare().then(() => {
  server.all("*", (req, res) => {
    return handle(req, res);
  });
  http.createServer(server).listen(ports.http,'0.0.0.0');
  https.createServer(options, server).listen(ports.https,'0.0.0.0');
});
