const { db } = require("./db/dbConnection");

function viewIndividualPost (slug) {
    return db.raw('SELECT * FROM posts WHERE slug = ?', [slug])
  }

function renderPost (postFromDb) {
  console.log('I am rendering this post', postFromDb.title)
   return `
    <h1>${postFromDb.title}</h1>
    <h4>${postFromDb.content}</h4>
    <p>posted by: ${postFromDb.post_author}</p>
    <p>total attaboys: ${postFromDb.post_attaboys}</p>
    
    `

}
  function prettyPrintJSON (x) {
    return JSON.stringify(x, null, 2)
  } 

  module.exports = {
      viewIndividualPost: viewIndividualPost,
      renderPost: renderPost,
      prettyPrintJSON: prettyPrintJSON
  }


  //view individual post query

  // SELECT
	// posts.id AS postID,
	// posts.title,
	// posts.content,
	// users.username,
	// attagories.attagory_name
	// 	FROM users
	// 		Join posts ON posts.post_author = users.id
	// 		Join attagories on attagories.id = posts.attagory_id;