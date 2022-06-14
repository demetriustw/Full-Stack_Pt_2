const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

//
// Challenge 1: Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file
//

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

// vid version
user.name = "Demetrius";
user.age = 20;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);

// my version
// const person = {
//   name: "Demetrius",
//   planet: user.planet,
//   age: "20",
// };

// const personJSON = JSON.stringify(person);
// console.log(personJSON);

// fs.writeFileSync("1-json.json", personJSON);
