function PromisifiedSet(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration * 1000));
}
async function happy() {
  await PromisifiedSet(3);
  console.log(`Printing after 3 seconds`);

  await PromisifiedSet(2);
  console.log(`Printing after 2 seconds`);

  await PromisifiedSet(1);
  console.log(`Printing after 1 second`);
}

happy();