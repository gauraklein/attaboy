const { db } = require("./db/dbConnection");
const uuidv1 = require('uuidv1')



function newPostToDB(post) {
  
  console.log(post.body)
  slug = uuidv1();
  return db.raw("INSERT INTO posts (attagory_id, post_author, title, content, post_attaboys, total_comments, post_slug) VALUES (?, ?, ?, ?, ?, ?, ?)", [
    
    post.body.attagories,
    post.user.id,
    post.body.title,
    post.body.content,
    0,
    0,
    slug
  ]);
}


  module.exports = {
    newPostToDB: newPostToDB
  }