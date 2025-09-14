const fs = require("fs");

// function read(err, data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// }

const data = fs.readFileSync("JS_Tut/b.txt", "utf-8");
console.log(data); // this will print data of b.txt

fs.writeFile("JS_Tut/a.txt", "Hii there for code", (err) => {
  if (err) console.log(err);
  console.log("File written successfully\n");
});

fs.appendFile("JS_Tut/a.txt", "\nThis is second line from code", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Append successfully\n");
  }
});

const data1 = fs.readFile("JS_Tut/a.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log("Data from file A is: " + data + "\n"); // Order of display will be random
});

//console.log(data1); output will be undefined because readFile is async function

const data2 = fs.readFile("JS_Tut/b.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log("Data from file B is: " + data + "\n");
});
//console.log(data2); output will be undefined because readFile is async function

console.log("Hello, I will be printing first\n");

console.log("Starting to read file...\n");

fs.readFile("JS_Tut/a.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log("File content (async):", data + "\n");
});

console.log("...this message prints BEFORE the file content!\n");
