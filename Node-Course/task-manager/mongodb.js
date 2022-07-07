// CRUD: Create, Read, Update, Delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    ////////////////////////////////////////////////////////////////////////////
    // First Section (Replace in "MangoClient.connect"/ Take out if replacing other section)
    ////////////////////////////////////////////////////////////////////////////

    // db.collection("users").insertOne(
    //   {
    //     name: "Vikram",
    //     age: 26,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28,
    //     },
    //     {
    //       name: "Gunther",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    ////////////////////////////////////////////////////////////////////////////
    //
    // Goal: Insert 3 tasks into a new tasks collection
    //
    // 1. Use insertMany to insert three documents
    //    -description (string), completed (boolean)
    // 2. Setup the callback to handle error or print ops
    // 3. Run the sript
    // 4. Refresh the database in Robo 3t and view data in tasks collection
    //
    ////////////////////////////////////////////////////////////////////////////

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "laundry",
    //       completed: true,
    //     },
    //     {
    //       description: "shopping",
    //       completed: false,
    //     },
    //     {
    //       description: "eating",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert tasks!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    ////////////////////////////////////////////////////////////////////////////
    // Second Section: Find part 1. (Replace in "MangoClient.connect"/ Take out if replacing other section)
    ////////////////////////////////////////////////////////////////////////////

    // db.collection("users").findOne(
    //   { _id: new ObjectID("62b217d7e8be48f20b504d65") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     } else if (user === null) {
    //       return console.log("Unable to find user");
    //     }

    //     console.log(user);
    //   }
    // );

    // Gives Complete Array
    // db.collection("users")
    //   .find({ age: 20 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // Gives Amount Num
    // db.collection("users")
    //   .find({ age: 20 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    ////////////////////////////////////////////////////////////////////////////
    //
    // Goal: Use find and findOne with tasks
    //
    // 1. Use findOne to fetch the last task by its id (print doc to console)
    // 2. Use find to fetch all tasks that are not completed (print docs to console)
    // 3. Test your work!
    //
    ////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////
    // Second Section: Find part 2. (Replace in "MangoClient.connect"/ Take out if replacing other section)
    ////////////////////////////////////////////////////////////////////////////

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("62b21423ab65b9f11c7b7a2d") },
    //   (error, task) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     } else if (task === null) {
    //       return console.log("Unable to find task");
    //     }

    //     console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    ////////////////////////////////////////////////////////////////////////////
    // Third Section: updateOne. (Replace in "MangoClient.connect"/ Take out if replacing other section)
    ////////////////////////////////////////////////////////////////////////////

    //   db.collection("users")
    //     .updateOne(
    //       {
    //         _id: new ObjectID("62b20e24170cb2efd5c0fd68"),
    //       },
    //       {
    //         $inc: {
    //           age: 8,
    //         },
    //       }
    //     )
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });

    ////////////////////////////////////////////////////////////////////////////
    // Third Section: updateMany. (Replace in "MangoClient.connect"/ Take out if replacing other section)
    ////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////
    //
    // Goal: Use updateMany to complete the tasks
    //
    // 1. Check the documentation for updateMany
    // 2. Setup the call with the query and the updates
    // 3. Use promise methods to setup the success/error handlers
    // 4. Test your work!
    //
    ////////////////////////////////////////////////////////////////////////////

    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    ////////////////////////////////////////////////////////////////////////////
    // Forth Section: Delete. (Replace in "MangoClient.connect"/ Take out if replacing other section)
    ////////////////////////////////////////////////////////////////////////////

    // db.collection("users")
    //   .deleteMany({
    //     age: 20,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    ////////////////////////////////////////////////////////////////////////////
    //
    // Goal: Use deleteOne to remove a task
    //
    // 1. Grab teh description for the task you want to remove
    // 2. Setup the call with the query
    // 3. Use promise methods to setup the success/error handlers
    // 4. Test your work!
    //
    ////////////////////////////////////////////////////////////////////////////

    db.collection("tasks")
      .deleteOne({
        description: "laundry",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
