function greet(name, callback) {
  console.log("hello " + name);
  callback();
}

function greeting() {
  console.log("nice meeting you");
}

greet("vedansh", greeting);
