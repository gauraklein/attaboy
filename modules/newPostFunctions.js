const { db } = require("./db/dbConnection");
const uuidv1 = require('uuidv1')

function newPostToDB(post) {
  console.log(post.user)
  slug = uuidv1();
  return db.raw("INSERT INTO posts (post_author, title, content, slug) VALUES (?, ?, ?, ?)", [
    post.user.id,
    post.body.title,
    post.body.content,
    slug
  ]);
}


  module.exports = {
    newPostToDB: newPostToDB
  }