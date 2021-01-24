const next = require("next");
const express = require("express");
const http = require("http");
const compression = require("compression");
const spdy = require("spdy");
const fs = require("fs");

const ports = {
  http: 80,
  https: 443,
};
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev: false });
const handle = app.getRequestHandler();
const server = express();
const httpsApp = express();

const shouldCompress = (req, res) => {
  // don't compress responses asking explicitly not
  if (req.headers["x-no-compression"]) {
    return false;
  }

  // use compression filter function
  return compression.filter(req, res);
};

const options = {
  key: fs.readFileSync("./cert/privkey1.pem"),
  cert: fs.readFileSync("./cert/cert1.pem"),
  ca: fs.readFileSync("./cert/chain1.pem"),
};

app.prepare().then(() => {
  httpsApp.use(compression({ filter: shouldCompress }));

  httpsApp.get("*", (req, res) => handle(req, res));

  server.get("*", (req, res) => {
    res.writeHead(302, {
      Location: "https://" + req.headers.host + req.url,
    });
    res.end();
  });

  spdy.createServer(options, httpsApp).listen(ports.https, "0.0.0.0", (err) => {
    if (err) throw err;
    console.log(`> HTTPS Ready on https://localhost:${ports.https}`);
  });

  http.createServer(server).listen(ports.http, "0.0.0.0", (err) => {
    if (err) throw err;
    console.log(`> HTTP Ready on http://localhost:${ports.http}`);
  });
});
