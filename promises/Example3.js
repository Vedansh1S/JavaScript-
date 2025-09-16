function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function promise(millisecond) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, millisecond);
  });
}
promise()
  .then(() => {})
  .catch(() => {});

function promise(millisecond) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, millisecond);
  });
}
promise()
  .then(() => {})
  .catch(() => {});
