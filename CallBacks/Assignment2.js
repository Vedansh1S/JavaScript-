function registerStudent(name, callback) {
  setTimeout(() => {
    console.log(`Studnet ${name} registered successfully`);
    callback();
  }, 2000);
}

function allDone(){
    console.log("All Students have registered");
    
}

registerStudent("Rahul", () => {
  registerStudent("Priya", () => {
    registerStudent("Aman", allDone);
  });
});
