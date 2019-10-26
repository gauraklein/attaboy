const { db } = require("./db/dbConnection");
const uuidv1 = require('uuidv1')


<<<<<<< HEAD
function NewCommentToDB(res) {
  var slug = uuidv1();
  return db.raw("INSERT INTO comments (comment_author, content, slug, post_id) VALUES (?, ?, ?, ?)", [
    res.user.id,
    res.body.content,
    slug,
    res.body.postid
=======
function NewCommentToDB(comment) {
  // console.log(comment.user)
  slug = uuidv1();
  return db.raw("INSERT INTO comments (post_id, comment_author, content, slug) VALUES (?, ?, ?, ?)", [
    comment.body.postID,
    comment.user.id,
    comment.body.content,
    slug
>>>>>>> d3a541b54c6af23757b034e0b24e965e251f2ff6
  ]);
}


  module.exports = {
    NewCommentToDB: NewCommentToDB
  }
  