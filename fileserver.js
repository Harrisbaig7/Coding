var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200);
      res.end("<h1>Home Page</h1>");
    } else if (req.url === "/view" && req.method === "GET") {
      //read static file
      var readStream = fs.createReadStream("sample.txt");
      readStream.pipe(res);
    } else if (req.url === "/copy" && req.method === "GET") {
      var rStream = fs.createReadStream("sample.txt");
      var wsStream = fs.createWriteStream("copy.txt");
      rStream.pipe(wsStream);
      res.end("filecopied");
    }
  })
  .listen(3000);

//run mongod in mongo server bin
