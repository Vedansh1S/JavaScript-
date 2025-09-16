function returnPromise() {
  return new Promise((reject) => {
    setTimeout(reject, 2000)
    reject(console.log("Error while reading"))
  });
}

returnPromise()
  .then()
  .catch((reject)=>{});
