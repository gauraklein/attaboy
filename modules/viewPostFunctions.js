const { db } = require("./db/dbConnection");

function viewIndividualPost (slug) {
    return db.raw('SELECT * FROM posts WHERE slug = ?', [slug])
  }

function renderPost (postFromDb) {

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