require("../src/db/mongoose");
const { findByIdAndUpdate } = require("../src/models/user");
const User = require("../src/models/user");

// User.findByIdAndUpdate("62b362339b6d7b12a1d240ed", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("62b362339b6d7b12a1d240ed", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
