function FetchData(dob, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Getting DOB: ${dob}.`);
      console.log(`Getting age: ${age}.`);
      resolve(`Success in retriving data.\n`);
    }, 3000);
  });
}

function FetchUsername(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Getting username of above data: ${username}.\n`);
      resolve(`Success in getting username.`);
    }, 3000);
  });
}

console.log(`Fetching started\n`); // Step 1:

FetchData("10/11/2003", 21)
  .then((res) => {
    console.log(res);
    return FetchUsername("Vedansh");
  })
  .then((res) => {
    console.log(res);
    console.log(`All data fetched successfully.`);
  })
