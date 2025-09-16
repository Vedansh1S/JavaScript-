// Example 1:Callback Hell

setTimeout(() => {
  console.log("hello after two seconds");
  setTimeout(() => {
    console.log("Hello after three seconds");
  }, 3000);
}, 2000);

// Example 2: Callback Hell

function Callbackhell(duration, callback) {
  setTimeout(() => {
    console.log(`Hello after ${duration} seconds`);
    if (callback) {
      callback();
    }
  }, duration * 1000);
}

Callbackhell(2, () => {
  Callbackhell(3, () => {
    Callbackhell(5, () => {
      console.log("Done");
    });
  });
});

// Solving Callback hell using promises

function PromisifiedCallbackHell(duration) {
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      return reject(new Error("Invalid duration")); // Good practice for error
    }

    setTimeout(() => {
      console.log(`hello after ${duration} seconds`);
      resolve();
    }, duration * 1000);
  });
}

PromisifiedCallbackHell(2)
  .then(() => {
    return PromisifiedCallbackHell(3);
  })
  .then(() => {
    return PromisifiedCallbackHell(5);
  })
  .then(() => {
    console.log("Done printing");
  })
  .catch((error) => {
    console.log(`An error Occured: ${error.message}`);
  });

// Using Async and Await
async function solution() {
  await PromisifiedCallbackHell(2);
  await PromisifiedCallbackHell(3);
}

solution()
