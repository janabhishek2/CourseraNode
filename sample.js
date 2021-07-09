function greet(name) {
  console.log("Welcome", name);
}

function getNameAndGreet(callback) {
  setTimeout(() => {
    callback("Abhishek");
  }, 2000);
}
