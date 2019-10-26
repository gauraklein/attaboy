const { db } = require("./db/dbConnection");

const getAllPostsQuery = `
SELECT
	posts.id AS postID,
	posts.post_slug,
	posts.title,
	posts.content,
	posts.post_attaboys AS total_Attaboys,
	users.username,
	users.slug AS user_slug,
	attagories.attagory_name,
	attagories.slug AS attagory_slug
		FROM users
			Join posts ON posts.post_author = users.id
			Join attagories on attagories.id = posts.attagory_id;
`;


function viewIndividualPost (slug) {
    return db.raw('SELECT * FROM posts WHERE post_slug = ?', [slug])
  }

function renderListPosts (postFromDb) {
  console.log('I am rendering this post', postFromDb.title)
   return `
    <a href="/viewpost/${postFromDb.slug}"><h1>${postFromDb.title}</h1></a>
    <h4>${postFromDb.content}</h4>
    <p>posted by: ${postFromDb.post_author}</p>
    <p>total attaboys: ${postFromDb.post_attaboys}</p>
    `
}

function renderSinglePost (postFromDb) {
  console.log('I am rendering this post', postFromDb.title)
   return `
    <div class="card border cardFix border-secondary">
  <div class="card-body border border-primary">
    <a href="/viewpost/${postFromDb.post_slug}"><h2>${postFromDb.title}</h2></a>
    <p class="card-text">${postFromDb.content}</p>
    <footer class="blockquote-footer">Posted by: <a href="/users/${postFromDb.user_slug}">${postFromDb.username}</a> Posted in: <a href="/attagories/${postFromDb.attagory_slug}">${postFromDb.attagory_name}</a> <cite>total attaboys: ${postFromDb.total_attaboys}</cite></footer>
      
    <form action="/newComment" method="post">
    <label value="${postFromDb.postid}">Content:</label>
      <input type="text" name="content" />
        <button type="submit">Submit</button>
    </form>
    
  </div>
</div>

    `
}
function getAllPosts() {
  return db.raw(getAllPostsQuery);
}

function renderAllPosts(allPosts) {
  return '<ul>' + allPosts.map(renderSinglePost).join('') + '</ul>'
}

  function prettyPrintJSON (x) {
    return JSON.stringify(x, null, 2)
  } 

  module.exports = {
      viewIndividualPost: viewIndividualPost,
      renderSinglePost: renderSinglePost,
      prettyPrintJSON: prettyPrintJSON,
      renderAllPosts: renderAllPosts,
      getAllPosts: getAllPosts

  }


  // view individual post query
