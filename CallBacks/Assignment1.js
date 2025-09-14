function orderFood(item, callback) {
  setTimeout(() => {
    console.log(`your ${item} is ready`);
    if (callback) {
      callback();
    }
  }, 2000);
}

orderFood("Burger", () => {
  orderFood("Fries", () => {
    orderFood("Coke");
  });
});
