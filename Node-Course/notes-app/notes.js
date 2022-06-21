// console.log("notes.js");
const fs = require("fs");
const chalk = require("chalk");

//
// Challenge 1: Setup command option
//
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function form notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="some title"
//

//
// Goal: Wire up read command
//
// 1. Setup --title option for read command
// 1. Create readNote in notes.js
//    - Search for note by title
//    - Find note and print title (styled) and body (plain)
//    - no note found? Print error in red.
// 2. Have the command handler call the function
// 3. Test your work by running a couple commands
//

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(
      chalk.green.inverse.bold("New note added!" + "'" + title + "'")
    );
  } else {
    console.log(chalk.red.inverse.bold("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep < notes) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse.bold("Note removed!" + "'" + title + "'"));
  } else {
    console.log(chalk.red.inverse.bold("Note not found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.blue.underline.bold("Your notes:"));

  return notes.forEach((note) => console.log(note.title));

  // what I did
  // return notes.filter((note) => console.log(chalk.blue(note.title)));
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.blue.underline.bold(title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse.bold("Note not found!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
