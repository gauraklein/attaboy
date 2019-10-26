const { db } = require("./db/dbConnection");
const uuidv1 = require('uuidv1')


function NewCommentToDB(comment) {
  console.log(comment.user)
  slug = uuidv1();
  return db.raw("INSERT INTO comments (post_id, comment_author, content, slug) VALUES (?, ?, ?)", [
    comment.body.value,
    comment.user.id,
    comment.body.content,
    slug
  ]);
}


  module.exports = {
    NewCommentToDB: NewCommentToDB
  }
  