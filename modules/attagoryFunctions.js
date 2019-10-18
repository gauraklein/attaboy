const { db } = require("./db/dbConnection");
const { renderPost} = require('./viewPostFunctions')

//Add Attagory to DB

let AttagoryID = 20
function newAttagoryToDB (post) {
  AttagoryID++
  return db.raw('INSERT INTO attagories (id, attagory_name, attagory_description, slug) VALUES (?, ?, ?, ?)', [AttagoryID, post.attagory_name, post.attagory_description, post.attagory_name])
}

//Attagory view/Render posts specific to attagory

function getRelevantPosts (attagoryID) {
  
  const getRelevantPostsQuery = `
  SELECT *
  FROM posts 
  WHERE attagory_id = ${attagoryID};
`
  return db.raw(getRelevantPostsQuery)
}

function getAttagoryID (attagorySlug) {
  console.log('getting attagory from DB')
  return db.raw(`
  SELECT *
  FROM attagories
  WHERE slug = ?`, [attagorySlug])
}

function renderAttagoryPosts (allPosts) {
  // console.log('this is the render all posts function', allPosts)
  return '<ul>' + allPosts.map(renderPost).join('') + '</ul>'
}


module.exports = {
    
    newAttagoryToDB: newAttagoryToDB,
    getRelevantPosts: getRelevantPosts,
    getAttagoryID: getAttagoryID,
    renderAttagoryPosts: renderAttagoryPosts

  }