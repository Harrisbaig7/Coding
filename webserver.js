var http = require("http");
var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollno: { type: String, required: true },
});

var Student = mongoose.model("Student", studentSchema);

http
  .createServer(function (req, res) {
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Home Page</h1> ");
      res.end();
    } else if (req.url === "/view" && req.method === "GET") {
      mongoose.connect("mongodb://localhost:27017/mydb", function (err) {
        if (err) {
          throw err;
        } else {
          Student.find({}).exec(function (err, data) {
            if (err) {
              throw err;
            } else {
              res.end(JSON.stringify(data));
            }
          });
        }
      });
    } else if (req.url === "/about" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h2>About</h2>");
    } else if (req.url === "/add" && req.method === "GET") {
      mongoose.connect("mongodb://localhost:27017/comsats", function (err) {
        if (err) {
          throw err;
        } else {
          Student.create({ name: "Ali", rollno: "132" }, function (err, data) {
            if (err) {
              throw err;
            } else {
              res.end(JSON.stringify(data));
            }
          });
        }
      });
    } else if (req.url === "/delete" && req.method === "GET") {
      mongoose.connect("mongodb://localhost:27017/comsats", function (err) {
        if (err) {
          throw err;
        } else {
          Student.deleteOne(
            { name: "Ali", rollno: "132" },
            function (err, data) {
              if (err) {
                throw err;
              } else {
                res.end(JSON.stringify(data));
              }
            }
          );
        }
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h2>Page not Found</h2>");
    }
  })
  .listen(8081);
console.log("Server is running");
