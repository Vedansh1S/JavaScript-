function getData(data, callbacak) {
  setTimeout(() => {
    console.log(`Fetched data: ${data}`);
    if (callbacak) {
      callbacak();
    }
  }, 1000);
}

getData(1, () => {
  getData(2, () => {});
});
