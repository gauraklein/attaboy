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
  WHERE attagory_id =${attagoryID};
`
  return db.raw(getRelevantPostsQuery)
}

function getAttagoryID (attagorySlug) {
  
  console.log('getAttagoryID function')
  return db.raw(`
  SELECT *
  FROM attagories
  WHERE slug = ?`, [attagorySlug])
}

function renderAttagoryPosts (allPosts) {
  console.log('this is the render all posts function', allPosts.rows)
  return '<ul>' + allPosts.rows.map(renderSinglePost).join('') + '</ul>'
}

//rendering attagories 


// for select boxes

function renderAttagoriesList (allAttagoriesList) {
  return allAttagoriesList.map(renderIndivdualAttagoryAsOption).join('')
}

function renderIndividualAttagoryAsOption (individualAttagory) {
    return `
      <option value="${individualAttagory.id}">${individualAttagory.attagory_name}</option>
    `
}

// for attagories page


function renderAllAttagories (attagoryList) {

  return '<ul>' + attagoryList.map(renderIndividualAttagory).join('') + '</ul>'

}

function renderIndividualAttagory (attagory) {

  return `<li>   
  <div class="card border border-dark cardFix">
  <div class="card-body border border-dark">
    <a href="/attagories/${attagory.slug}"><h2>${attagory.attagory_name}</h2></a>
    <p class="card-text">${attagory.attagory_description}</p>
    <footer class="blockquote-footer">Total Posts: ${attagory.total_posts}  Total Subscribers: ${attagory.total_subscriptions}</cite></footer>
      
    <form action="/subscribe" method="post">
        <button type="subscribe">Subscribe</button>
    </form>
    
  </div>
</div>
</li>`

}

// db query
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
    renderIndividualAttagoryAsOption: renderIndividualAttagoryAsOption,
    getAllAttagories: getAllAttagories,
    renderAllAttagories: renderAllAttagories,
    renderIndividualAttagory: renderIndividualAttagory


  }