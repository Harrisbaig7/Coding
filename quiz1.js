var http = require("http");
var fs = require("fs");
var url = require("url");

// http
//   .createServer(function (req, res) {
//     var pathname = url.parse(req.url).pathname;
//     console.log("Pathname: ", pathname);
//     fs.readFile(pathname.substr(1), function (err, data) {
//       if (err) {
//         console.log(err);
//         res.writeHead(404, { "Content-Type": "text/plain" });
//       } else {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.write(data.toString());
//         res.end("Hello World\n");
//       }
//     });
//   })
//   .listen(8081);
// console.log("server running at 8081");

try {
  var stream = fs.createReadStream("abc.txt");
  stream.on("data", function (data) {
    var chunk = data.toString();
    console.log(chunk);
    process.stdout.write(data);
  });
} catch (err) {
  throw err;
}

stream.on("end", function () {
  console.log();
});
