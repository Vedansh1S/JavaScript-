const fs = require("fs")
const data1 = fs.readFile("JS_Tut/a.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log("Data from file A is: " + data + "\n"); // Order of display will be random
});

function forReadFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("JS_Tut/a.txt", "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

forReadFile()
.then()
.catch();

