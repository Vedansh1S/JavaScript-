function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data that is being called: ${data}\n`);
      resolve("Success");
    }, 3000);
  });
}

(async function getAllData() {
  console.log("Calling for data 1");
  await getData(1);

  console.log("Calling for data 2");
  await getData(2);

  console.log("Calling for data 3");
  await getData(3);

  console.log("Calling for data 4");
  await getData(4);

  console.log("Success");
})();

//getAllData();
