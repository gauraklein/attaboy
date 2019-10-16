const { db } = require("./db/dbConnection");
let postID = 20 /// deals with id not incrementing issue
function newPostToDB (post) {
    postID++
    return db.raw('INSERT INTO posts (id, title, content, slug) VALUES (?, ?, ?, ?)', [postID, post.title, post.content, post.title])
  }

  module.exports = {
    newPostToDB: newPostToDB
  }