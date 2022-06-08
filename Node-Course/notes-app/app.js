// const fs = require ("fs");
// fs.appendFileSync

// const add = require("./utils.js");
// const sum = add(4, -2);
// console.log(sum);

// const fs = require("fs");
//
// fs.writeFileSync(
//   "notes.js",
//   `console.log("notes.js");
//
// const getNotes = function () {
//   return "Your notes...";
// };
//
// module.exports = getNotes;`
// );

const getNotes = require("./notes.js");

const msg = getNotes();

console.log(msg);

//
// const validator = require("validator");
// console.log(validator.isURL("https/mead.io"));
//

//
// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
//
// Bonus: Use docs to mess around with other styles. Make text bold and inversed
//

const chalk = require("chalk");

console.log(chalk.green("Success!"));
