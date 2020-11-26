const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const response = require("express");
const request = require("http");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.post("/", (req, res) => {
  let val = Number(req.body.val),
    fromC = req.body.fromC,
    toC = req.body.toC;
  let request = require("request");
  let url =
    "https://api.coingecko.com/api/v3/simple/price?ids=" +
    fromC +
    "&vs_currencies=" +
    toC;
  request(url, { json: false }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let multiplier = Number(
        body.substring(body.lastIndexOf('"') + 2, body.length - 2)
      );
      let result = val * multiplier;
      res.send(
        "<!DOCTYPE html><html>" +
          '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/></head>\n' +
          '<body class="text-center">' +
          "<h2>And the value of <b>" +
          val +
          "</b> " +
          fromC +
          " is:</h2><h1>" +
          result +
          " " +
          toC +
          "</h1>\n" +
          '<button class="btn btn-primary" onclick="location.href=\'./\'">DOITAGAIN,ITSAWESOME!</button>\n' +
          '<script src="btrap.js"></script></body>' +
          "</html>"
      );
    }
  });
});

app.listen(8080, function () {
  console.log("on port 8080");
});
