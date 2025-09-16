const FileRead = require("fs");
function Clean(filepath) {
  return new Promise((resolve, reject) => {
    FileRead.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        return reject(err);               // always a function
      } else {
        //const cleanedContent = data.trim();
        return resolve(data.trim());   // always a function
      }
    });
  });
}

Clean("promises/a.txt")
  .then((content) => {
    console.log(content); // content is the argument passed in resolve() function (like resolve(content))
    console.log("Happy");
  })
  .catch((error) => {    // error is the argument passes in the reject(err) function 
    console.log(error.message); //.message is a property of error
    console.log("sad");
  });
