# JavaScript Callbacks 🚀

This project is a simple practice repo for learning **callbacks** in JavaScript.  
Callbacks are functions that are passed as arguments to other functions, and are executed later, often after an asynchronous task (like fetching data, reading a file, or waiting for a timer).

---

## 📌 What is a Callback?
A **callback** is simply:
- A function you hand over to another function.
- That function will "call you back" when it’s done with its job.

👉 Think of it like giving your friend your phone number and asking them to call you once they’ve reached home.  

---

## 🧑‍💻 Examples

### Basic Example
```js
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Vedansh", sayBye);
