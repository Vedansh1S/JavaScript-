// Program to promisify and append in a file, then read a file

const FileRead = require("fs");

function AppendFile(path) {
  return new Promise((resolve, reject) => {
    FileRead.appendFile(path, "\nI want this in the next line", (err) => {
      if (err) {
        return reject(err);
      } else {
        resolve("Appended Successfully");
      }
    });
  });
}

function ReadFile(path){
    return new Promise((resolve, reject) => {
        FileRead.readFile(path, "utf-8", (err,data) => {
            if (err){
                reject(err)
            }
            else{
                resolve(data.trim());
            }
        })
    })
}

AppendFile("promises/a.txt")
  .then((message) => {
    console.log(message);
    return ReadFile("promises/a.txt")
  })
  .then((content)=>{
    console.log(content);
  })
  .catch((error) => {
    console.log(error.message);
  });
