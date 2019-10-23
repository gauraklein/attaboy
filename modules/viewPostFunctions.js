const { db } = require("./db/dbConnection");

const getAllPostsQuery = `
  SELECT *
  FROM Posts
`;

function viewIndividualPost (slug) {
    return db.raw('SELECT * FROM posts WHERE slug = ?', [slug])
  }

function renderPost (postFromDb) {
  console.log('I am rendering this post', postFromDb.title)
   return `
   
    <div class="card border border-secondary">
  <div class="card-body border border-primary">
    <h5 class="card-title">${postFromDb.title}</h5>
    <p class="card-text">${postFromDb.content}</p>
    <footer class="blockquote-footer">posted by: ${postFromDb.post_author} <cite>total attaboys: ${postFromDb.post_attaboys}</cite></footer>
  </div>
</div>

    `
}

function getAllPosts() {
  return db.raw(getAllPostsQuery);
}

function renderAllPosts(allPosts) {
  return '<form action="/posts/:slug" method ="posts"> <ul>' + allPosts.map(renderPost).join('') + '</ul></form>'
}

  function prettyPrintJSON (x) {
    return JSON.stringify(x, null, 2)
  } 

  module.exports = {
      viewIndividualPost: viewIndividualPost,
      renderPost: renderPost,
      prettyPrintJSON: prettyPrintJSON,
      renderAllPosts: renderAllPosts,
      getAllPosts:getAllPosts

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