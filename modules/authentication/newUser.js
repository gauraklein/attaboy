const { db } = require("../db/dbConnection.js");
const uuidv1 = require("uuidv1");

const getAllUsersQuery = `
SELECT *
FROM users
`;

function addUser(newUser) {
  // console.log(newUser)
  // let id = ;
  let username = newUser.username;
  let password = newUser.password;
  let email = newUser.email;
  let slug = uuidv1();
  return db.raw(
    "INSERT INTO users (username, password, email, slug) VALUES (?, ?, ?, ?)",
    [username, password, email, slug]
  );
}



module.exports = {
  // displayTodos: displayTodos,
  addUser: addUser
  // getAllTodos: getAllTodos,
  // getOneTodo: getOneTodo,
  // deleteTodo: deleteTodo
};
