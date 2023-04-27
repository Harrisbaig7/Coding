var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://0.0.0.0:27017";
// var url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, db) {
  if (err) {
    return err;
  } else {
    // console.log("Database Connected");
    // sort 1-> acsending, -1->decsending
    var dbo = db.db("mydb");
    dbo
      .collection("students")
      .find({}, { _id: 0, name: 1 }) //find has 2 args ({selection},{projection}) //0-> hidden, 1->shown
      .toArray(function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
  }
});
