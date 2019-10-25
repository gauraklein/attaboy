const { db } = require("./db/dbConnection");

// const getAllCommentsQuery = `
//   SELECT *
//   FROM Comments
// `;

// function viewIndividualComment (slug) {
//     return db.raw('SELECT * FROM comments WHERE slug = ?', [slug])
//   }

// function renderComment (commentFromDb) {
//   console.log('I am rendering this comment', commentFromDb.title)
//    return `
//     <p>${commentFromDb.content}</p>
//     <p>posted by: ${commentFromDb.post_author}</p>
//     <p>total attaboys: ${commentFromDb.post_attaboys}</p>
//     <button>comment${commentFromDb.body.content}</button>
    
//     `
// }
// function getAllComments() {
//   return db.raw(getAllCommentsQuery);
// }

// function renderAllComments(allComments) {
//   return '<form action="/comments/:slug" method ="comments"> <ul>' + allComments.map(renderComment).join('') + '</ul></form>'
// }

//   function prettyPrintJSON (x) {
//     return JSON.stringify(x, null, 2)
//   } 

//   module.exports = {
//       viewIndividualComment: viewIndividualComment,
//       renderComment: renderComment,
//       renderAllComments: renderAllComments,
//       getAllComments:getAllComments

//   }

const getAllPostsQuery = `
SELECT
posts.id AS postID,
posts.title,
posts.content,
posts.post_attaboys AS total_Attaboys,
users.username,
attagories.attagory_name
  FROM users
    Join posts ON posts.post_author = users.id
    Join attagories on attagories.id = posts.attagory_id;
`;
View_Indivdual_Post = `
SELECT
posts.id AS postID,
posts.slug AS post_slug,
posts.title,
posts.content,
posts.post_attaboys AS total_Attaboys,
users.username,
attagories.attagory_name
  FROM users
    Join posts ON posts.post_author = users.id
    Join attagories on attagories.id = posts.attagory_id
      `;

function viewIndividualPost (slug) {
    return db.raw('SELECT * FROM posts WHERE slug = ?', slug)
  }

function renderPost (postFromDb) {
  console.log('I am rendering this slug', postFromDb)
   return `
  
    <div class="card border border-secondary">
  <div class="card-body border border-primary">
    <a href="/viewpost/${postFromDb.post_slug}"><h2>${postFromDb.title}</h2></a>
    <p class="card-text">${postFromDb.content}</p>
    <footer class="blockquote-footer">posted by: ${postFromDb.username} <cite>total attaboys: ${postFromDb.total_attaboys}</cite></footer>
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


  // view individual post query
