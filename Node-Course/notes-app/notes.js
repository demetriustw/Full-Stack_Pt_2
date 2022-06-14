// console.log("notes.js");
const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

//
// Challenge 1: Setup command option
//
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function form notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="some title"
//

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
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
  return notes.filter((note) => console.log(chalk.blue(note.title)));
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
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
};
