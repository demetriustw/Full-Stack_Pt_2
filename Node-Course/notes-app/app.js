//////////////////////////////////////////////////////////////////////////////////////////
// Fs Introduction
//////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////
// Node Introduction
//////////////////////////////////////////////////////////////////////////////////////////

// npm i node@18.3.0

// const getNotes = require("./notes.js");

// const msg = getNotes();

// console.log(msg);

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

// npm i chalk@2.4.1

//////////////////////////////////////////////////////////////////////////////////////////
// Chalk Introduction
//////////////////////////////////////////////////////////////////////////////////////////

// const chalk = require("chalk");
// const getNotes = require("./notes.js");

// const greenMsgInv = chalk.green.bold.inverse.italic("Success!");
// const greenMsgUl = chalk.green.bold.italic.underline("Success!");
// const redMsg = chalk.red.inverse.bold("Error!");

// console.log(greenMsgInv);

//////////////////////////////////////////////////////////////////////////////////////////
// Nodemon Introduction
//////////////////////////////////////////////////////////////////////////////////////////

// npm i nodemon@1.12.5

// console.log(process.argv[2]);

// const input = process.argv[2];

// if (input !== "") {
//   console.log("Hello, " + input + "!");
// }

//////////////////////////////////////////////////////////////////////////////////////////
// Yargs Introduction
//////////////////////////////////////////////////////////////////////////////////////////

const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// console.log(process.argv);

//
// Challenge 1: Add two new commands
//
// 1. Setup command support "list" command (print placeholder message for now)
// 2. Setup command support "read" command (print placeholder message for now)
// 3. Test your work by running both commands and ensure correct output
//

//
// Challenge 2: Add an option to yargs
//
// 1. Setup a body option for the add command
// 2. Configure a description, make it requried, and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work!
//

//
// Challenge 3.1: Setup command option
//
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function form notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 3. Test your work using: node app.js remove --title="some title"
//

//
// Challenge 3.2: Wire up removeNote
//
// 1. Load existing notes
// 2. Use array filter method to remove the matching note (if any)
// 3. Save the newly created array
// 4. Test your work with a title that exists and a title that doesn't exist
//

//
// Challenge 3.2: Use chalk to provide usful logs for remove
//
// 1. If a note is removed, print "Note removed!" with a green background
// 2. If no note is removed, print "No note found!" with a red background
//

//
// Goal: Refactor all functions
//
// 1. If function is a method, use ES6 meathod definition syntax
// 2. Otherwise, use most concise arrow function possible
// 3. Test your work!
//

//
// Goal: Wire up list command
//
// 1. Create and export listNotes from notes.js
//    - "Your notes" using chalk
//    - Print note title for each note
// 2. Call listNotes from command handler
// 3. Test your work!
//

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Print the note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title, argv.body);
  },
});

yargs.parse();
// console.log(yargs.argv);

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }
