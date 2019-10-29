const { db } = require("./db/dbConnection");
const uuidv1 = require('uuidv1')


function NewCommentToDB(res) {
  var slug = uuidv1();
  return db.raw("INSERT INTO comments (comment_author, content, slug, post_id) VALUES (?, ?, ?, ?)", [
    res.user.id,
    res.body.content,
    slug,
    res.body.postid
  ]);
}


  module.exports = {
    NewCommentToDB: NewCommentToDB
  }
  