fs = require("fs");

function myFunction(err, data) {
  console.log("data:", data);
}
fs.readdir("/", myFunction);

console.log("This comes after");
