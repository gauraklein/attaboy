const { db } = require("./db/dbConnection");
const uuidv1 = require('uuidv1')


function NewCommentToDB(comment) {
  slug = uuidv1();
  return db.raw("INSERT INTO comments (comment_author, content, slug) VALUES (?, ?, ?)", [
    comment.user.id,
    comment.body.content,
    slug
  ]);
}


  module.exports = {
    NewCommentToDB: NewCommentToDB
  }
  