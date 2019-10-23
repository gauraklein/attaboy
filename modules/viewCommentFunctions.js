const { db } = require("./db/dbConnection");
const uuidv1 = require('uuidv1')

let postID = 20 /// deals with id not incrementing issue
function commentToDB(comment) {
  slug = uuidv1();
  return db.raw("INSERT INTO comments (comment_author, content, post_id, slug) VALUES (?, ?, ?, ?)", [
    comment.user.id,
    comment.body.content,
    comment.body.post_id,
    slug
  ]);
}


  module.exports = {
    commentToDB: commentToDB
  }
  
  


const getAllCommentsQuery = `
  SELECT *
  FROM Comments
`;

function viewIndividualComment (slug) {
    return db.raw('SELECT * FROM comments WHERE slug = ?', [slug])
  }

function renderComment (commentFromDb) {
  console.log('I am rendering this comment', commentFromDb.title)
   return `
    <p>${commentFromDb.content}</p>
    <p>posted by: ${commentFromDb.post_author}</p>
    <p>total attaboys: ${commentFromDb.post_attaboys}</p>
    <button>comment${commentFromDb.body.content}</button>
    
    `
}
function getAllComments() {
  return db.raw(getAllCommentsQuery);
}

function renderAllComments(allComments) {
  return '<form action="/comments/:slug" method ="comments"> <ul>' + allComments.map(renderComment).join('') + '</ul></form>'
}

  function prettyPrintJSON (x) {
    return JSON.stringify(x, null, 2)
  } 

  module.exports = {
      viewIndividualComment: viewIndividualComment,
      renderComment: renderComment,
      renderAllComments: renderAllComments,
      getAllComments:getAllComments

  }
