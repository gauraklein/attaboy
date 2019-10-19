const { db } = require("../db/dbConnection.js");
const uuidv1 = require("uuidv1");

const getAllUsersQuery = `
SELECT *
FROM users
`;

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}


function resolved(result) {
  console.log('Resolved');
}

function rejected(result) {
  console.error(result);
}

function addUser(newUser) {
  // console.log(newUser)
  // let id = ;
  let username = newUser.username;
  let password = newUser.password;
  let email = newUser.email;
  let slug = uuidv1();
  function validationResults(newUser) {
    if (emailIsValid(newUser.email)) {
      return Promise.resolve().then(() => {
        console.info("Inserting user in DB");
        return db.raw(
          "INSERT INTO users (username, password, email, slug) VALUES (?, ?, ?, ?)",
          [username, password, email, slug]
        );
      });
    } else {
      return Promise.reject(new Error('Email is not valid')).then(rejected);
    }
  }
  return validationResults(newUser);
}

module.exports = {
  addUser: addUser,
  emailIsValid: emailIsValid
};
