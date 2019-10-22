const { db } = require("../db/dbConnection.js");
const uuidv1 = require("uuidv1");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'C0l0$$us!';
const someOtherPlaintextPassword = 'TheMighty_Nein';

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
  console.log(newUser)
  // let id = ;
  let username = newUser.username;
  // let planTextPass = newUser.password;
  let email = newUser.email;
  let slug = uuidv1();
  let password = bcrypt.hashSync(newUser.password, saltRounds);

  function validationResults(newUser) {
    if (emailIsValid(newUser.email)) {
      return Promise.resolve().then(() => {
        // console.info("Inserting user in DB");
        console.log("email is valid promise password - ", password)
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
