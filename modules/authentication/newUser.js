const { db } = require("../db/dbConnection.js");
const uuidv1 = require("uuidv1");
const bcrypt = require("bcrypt");
const saltRounds = 10;



const getAllUsersQuery = `
SELECT *
FROM users
`;

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// function resolved(result) {
//   console.log("Resolved");
// }

// function rejected(result) {
//   console.error(result);
// }

//This function assumes that the email address is valid.

function addUser(newUser) {
  console.log(newUser);
  let username = newUser.username;
  let password = bcrypt.hashSync(newUser.password, saltRounds);
  let email = newUser.email;
  let slug = username;
    if (emailIsValid(newUser.email)) {
      return db.raw(
            "INSERT INTO users (username, password, email, slug) VALUES (?, ?, ?, ?)",
            [username, password, email, slug]
          );
        
    } else {
      return Promise.reject(new Error("Email is not valid"));
    }
}

module.exports = {
  addUser: addUser,
  emailIsValid: emailIsValid
};
