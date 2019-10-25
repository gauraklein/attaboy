const { db } = require("./db/dbConnection");

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

const getAllPostsQuery = `
  SELECT *
  FROM Posts
`;
// View_Indivdual_Post = `
//   SELECT*
//   FROM
// 	posts.id AS postID,
// 	posts.title,
// 	posts.content,
// 	users.username,
// 	attagories.attagory_name
// 		FROM users
// 			Join posts ON posts.post_author = users.id
//       Join attagories on attagories.id = posts.attagory_id
//       `;

function viewIndividualPost (slug) {
    return db.raw('SELECT * FROM posts WHERE slug = ?', [slug])
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
    <a href="/viewpost/${postFromDb.slug}"><h1>${postFromDb.title}</h1></a>
    <h4>${postFromDb.content}</h4>
    <p>posted by: ${postFromDb.post_author}</p>
    <p>total attaboys: ${postFromDb.post_attaboys}</p>
    
    <button>comment</button>
    `
}
function getAllPosts() {
  return db.raw(getAllPostsQuery);
}

function renderAllPosts(allPosts) {
  return '<form action="/posts/:slug" method ="posts"> <ul>' + allPosts.map(renderListPosts).join('') + '</ul></form>'
}

  function prettyPrintJSON (x) {
    return JSON.stringify(x, null, 2)
  } 

  module.exports = {
      viewIndividualPost: viewIndividualPost,
      renderSinglePost: renderSinglePost,
      prettyPrintJSON: prettyPrintJSON,
      renderAllPosts: renderAllPosts,
      getAllPosts:getAllPosts

  }


  // view individual post query
