require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("62b367e93c84a61459d379d3")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("62b38022acfb4020c94333b6")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });

////////////////////////////////////////////////////////////////////////////
// Goal 1: Mess around with promise chaining
//
// 1. Create promise-chaining-2.js
// 2. Load in mongoose and task model
// 3. Remove a given task by id
// 4. Get and print the total number of incomplete tasks
// 5. Test your work!
////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////
// Goal 2: Use async/await
//
// 1. Create deleteTaskAndCount as an async function
//    - Accept id of task to remove
// 2. Use await to delete task and count up incomplete tasks
// 3. Return the count
// 4. Call the function and attach then/catch to log results
// 5. Test your work!
////////////////////////////////////////////////////////////////////////////
