const { db } = require("./db/dbConnection");
const { renderSinglePost} = require('./viewPostFunctions')

//Add Attagory to DB


function newAttagoryToDB (post) {
  
  return db.raw('INSERT INTO attagories (attagory_name, attagory_description, slug) VALUES (?, ?, ?)', [ post.attagory_name, post.attagory_description, post.attagory_name])
}

//Attagory view/Render posts specific to attagory

function getRelevantPosts (attagoryID) {
  
  const getRelevantPostsQuery = `
  SELECT
	posts.id AS postID,
	posts.post_slug,
	posts.title,
	posts.content,
	posts.post_attaboys AS total_Attaboys,
	users.username,
	users.slug AS user_slug,
	attagories.attagory_name,
  attagories.slug AS attagory_slug,
  attagories.id AS attagoryID
		FROM users
			Join posts ON posts.post_author = users.id
			Join attagories on attagories.id = posts.attagory_id
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
  console.log('this is the render all posts function')
  return '<ul>' + allPosts.map(renderSinglePost).join('') + '</ul>'
}

//rendering attagories 

function renderAttagoriesList (allAttagoriesList) {
  return allAttagoriesList.map(renderIndivdualAttagory).join('')
}

function renderIndivdualAttagory (individualAttagory) {
    return `
      <option value="${individualAttagory.id}">${individualAttagory.attagory_name}</option>
    `
}
const getAllAttagoriesQuery = `
  SELECT *
    FROM 
      attagories;`

function getAllAttagories () {
  return db.raw(getAllAttagoriesQuery)
}

module.exports = {
    
    newAttagoryToDB: newAttagoryToDB,
    getRelevantPosts: getRelevantPosts,
    getAttagoryID: getAttagoryID,
    renderAttagoryPosts: renderAttagoryPosts,
    renderAttagoriesList: renderAttagoriesList,
    renderIndivdualAttagory: renderIndivdualAttagory,
    getAllAttagories: getAllAttagories

  }