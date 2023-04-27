var fs = require("fs");

// // read in string UTF-8
// fs.readFile(__filename, "utf-8", function (error, data) {
//   if (error) throw error;

//   console.log(data);
// });

// // read in buffer but show as string
// fs.readFile(__filename, function (error, data) {
//   if (error) throw error;

//   console.log(data.toString());
// });

// // read in sync mode
// try {
//   var data = fs.readFileSync(__filename);
//   console.log(data.toString());
// } catch (error) {
//   console.log(error);
// }

// fs.open("abc.txt", function (err, data) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// ascii \0 => file ended
fs.appendFile("abc.txt", "  Hi", function (err) {
  if (err) {
    throw err;
  }
  console.log("SAVED");
});

fs.writeFile("abc.txt", " A ", function (err) {
  if (err) {
    console.log(err);
  }
  console.log("done");
});

//streams

// try {
//   var stream = fs.createReadStream("foo.txt");
//   stream.on("data", function (data) {
//     var chunk = data.toString();
//     console.log(chunk);
//     process.stdout.write(chunk);
//   });
// } catch (err) {
//   throw err;
// }

// stream.on("end", function () {
//   console.log();
// });
