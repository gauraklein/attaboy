const { db } = require("./db/dbConnection");
const getAllCommentsQuery = `
SELECT*
From
comments

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
    
    
    `
}
//<button>comment${commentFromDb.body.content}</button>
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
