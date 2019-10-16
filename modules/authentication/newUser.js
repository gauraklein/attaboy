const {db} = require('../db/dbConnection.js')
const uuidv1 = require('uuidv1');


const getAllUsersQuery = `
SELECT *
FROM users
`


function addUser(newUser) {
    let id = 21
    let username = newUser.username
    let password = newUser.username
    let email = newUser.username
    let slug = id
    return db.raw("INSERT INTO users (id, username, password, email, slug) VALUES (?, ?, ?, ?, ?)", [id, username, password, email, slug])
}

module.exports = {
    // displayTodos: displayTodos,
    addUser: addUser
    // getAllTodos: getAllTodos,
    // getOneTodo: getOneTodo,
    // deleteTodo: deleteTodo
}