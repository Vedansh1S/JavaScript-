function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Got the Data 1: ${data}`);
      resolve("Success");
    }, 3000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Got the Data2: ${data}`);
    }, 3000);
  });
}

console.log(`Start fetching data 1`);
getData(10).then((res) => {
  console.log(`start fetching data 2`);
  processData(20).then((res) => {
    console.log("Done");
  });
});
