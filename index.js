const fs = require("fs");
fs.writeFile("data.txt", "hello world", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("file written");
});

fs.appendFile("data.txt", "Hey Vishnu", (err) => {
  if (err) console.log(err);
  console.log("data added");
});

fs.appendFile("data.txt", "How r u? ", (err) => {
  if (err) console.log(err);
  console.log("data added");
});

// fs.readFile("data.txt", "utf8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
// });

let data = fs.readFileSync("data.txt", {
  encoding: "utf8",
  flag: "r",
});

console.log(data);
