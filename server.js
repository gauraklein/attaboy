const fs = require("fs");

//Express Server
const express = require("express");
const app = express();
const port = 3000;
const { db } = require("./modules/db/dbConnection");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { emailIsValid } = require("./modules/authentication/newUser.js");



//Modules
const log = require("./modules/logging.js");
const mustache = require("mustache");
const { NewCommentToDB } = require("./modules/newCommentFunctions.js");
const { newPostToDB } = require("./modules/newPostFunctions.js");
const {
  viewIndividualComment,
      renderComment,
      renderAllComments,
      getAllComments
} = require("./modules/viewCommentFunctions");
const {
  viewIndividualPost,
  renderSinglePost,
  prettyPrintJSON,
  renderAllPosts,
  getAllPosts,
  viewIndividualPostByID
} = require("./modules/viewPostFunctions");
const {
  renderAttagoryPosts,
  getAttagoryID,
  getRelevantPosts,
  newAttagoryToDB,
  renderAttagoriesList,
  renderIndividualAttagory,
  renderIndividualAttagoryAsOption,
  getAllAttagories,
  renderAllAttagories,

} = require("./modules/attagoryFunctions");
const { addUser } = require("./modules/authentication/newUser.js");
const uuidv1 = require("uuidv1");

//Templating
const allAttagoryPage = fs.readFileSync('./templates/allAttagoryPage.mustache', 'utf8');
const newCommentPage = fs.readFileSync("./templates/newComment.mustache", "utf8");
const newPostPage = fs.readFileSync("./templates/newPost.mustache", "utf8");
const userProfilePage = fs.readFileSync('./templates/userProfile.mustache', 'utf8')
const viewPostTemplate = fs.readFileSync(
  "./templates/viewPost.mustache",
  "utf8"
);
const newAttagoryPage = fs.readFileSync(
  "./templates/newAttagory.mustache",
  "utf8"
);
const ViewAttagoryPage = fs.readFileSync(
  "./templates/viewAttagory.mustache",
  "utf8"
);
const viewCommentTemplate = fs.readFileSync("./templates/ViewComment.mustache", "utf8");
const homepageTemplate = fs.readFileSync("./templates/homepage.mustache", "utf8");

//--------------------------------------\\
//               PASSPORT               \\
//--------------------------------------\\

passport.use(
  new LocalStrategy((username, password, done) => {
    console.log("got auth request");
    db("users")
      .where({ username: username })
      // .orwhere({ email: username })
      .then(res => {
        // console.log(userRows)
        const user = res[0];
        // console.log(user);
        if (!user) {
          console.log("User not found");
          done(null, false);
        } 
        
        if (bcrypt.compareSync(user.password, password)) {
          console.log("Wrong Password");
          done(null, false);
        } else
        console.log("User found");
        return done(null, user);
      })
      .catch(err => {
        console.error("Local strategy error - ", err);
        return err;
      });
  })
);
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {}
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  db("users")
    .where({ id: id })
    .then(res => {
      done(null, res[0]);
    })
    .catch(error => done(error, false));
});


//--------------------------------------\\
//           NEW POST ROUTES            \\
//--------------------------------------\\

// FIX ROUTING FOR NEW POSTS - CHANGED DURING MERGE************

app.post("/:attagory/newpost", ensureAuth, (req, res, next) => {
  console.log('this is the post', req.params)
  newPostToDB(req) //adds post
    .then(function() {
      res.send(
        `<h1>You submitted a post! Click <a href="/newpost">here</a> to submit another!</h1>`
      );
    })
    .catch(function(err) {
      console.error(err);
      res.status(500).send("you did not submit a post");
    });
});

app.post("/newpost", ensureAuth, (req, res, next) => {
  console.log('this is the post', req.params)
  newPostToDB(req) //adds post
    .then(function() {
      res.send(
        `<h1>You submitted a post! Click <a href="/newpost">here</a> to submit another!</h1>`
      );
    })
    .catch(function(err) {
      console.error(err);
      res.status(500).send("you did not submit a post");
    });
});

app.get("/newpost", ensureAuth, function(req, res) {
  console.log('this is the get', req.body)
  let homePageusername = req.user.slug
  getAllAttagories()
  .then(function(allAttagories) {
      console.log(allAttagories, 'these are the attagories')
    res.send(
      mustache.render(newPostPage, {
        allAttagoriesHTML: renderAttagoriesList(allAttagories.rows),
        userRoute: homePageusername
      })
    )
  })
});


app.get("/:attagory/newpost", ensureAuth, function(req, res) {
  console.log('this is the get', req.params)
  // console.log(req.user);
  res.send(mustache.render(newPostPage)); //has the submit form
});


//--------------------------------------\\
//          VIEW POST ROUTES            \\
//--------------------------------------\\

app.get("/viewpost/:slug", ensureAuth, function(req, res) {
  // console.log(req.params.slug);
  let homePageusername = req.user.slug
  // console.log(req.params.slug, 'this is the post slug')
  viewIndividualPostByID(req.params.slug)
    .then(function(allPostData) {
      let postid = allPostData.rows[0].postid;
      let postData = allPostData.rows[0];
      console.log(postData)
        // console.log(post.rows, 'this is the post object')
        getCommentsByPost(postid)
          .then(function(data) {
            // console.log(data.rows, 'these are the comments')
            console.log(postData, 'this is the post object')
            var comments = data.rows;
            res.send(renderSinglePost(postData, comments));
          })
      
    })
    .catch(function(err) {
      // console.error(err);
      res.status(404).send("that post has not been posted yet");
    });
});

const getAllPostsForSinglePostQuery = `
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
function getCommentsByPost(postid) {
  return db.raw('SELECT * FROM comments WHERE post_id = ?', [postid])
}

//--------------------------------------\\
//        NEW COMMENT ROUTES             \\
//--------------------------------------\\

app.post("/newComment", ensureAuth, (req, res, next) => {
  console.log('this is the req', req.body.postid)
  console.log('this is the req', req.body)
  let commentPostID = req.body.postid
  NewCommentToDB(req)
    .then(function(comment) {
      getIndividualPostFromComment(commentPostID)
      .then(function(postInfo) {
        console.log(postInfo.rows)
        // res.send(mustache.render(viewPostTemplate, {
        //   individualPost: renderSinglePost(postInfo.rows)
        // }))
  res.send('You sucessfully added a comment click <a href="/home">HERE</a> to return home!')

      })
    })
    .catch(function(err) {
      console.error(err);
      res.status(500).send("Comment not sent");
    });
});

function getIndividualPostFromComment (postid) {

  return db.raw(`SELECT *
          FROM posts
              WHERE id =?`, [postid])

}

app.get("/newComment", ensureAuth, function(req, res) {
  console.log(req.user);
  let homePageusername = req.user.slug
  res.send(mustache.render(newCommentPage, {
    userRoute: homePageusername
  })); //has the submit form
});

//--------------------------------------\\
//        VIEW COMMENT ROUTES            \\
//--------------------------------------\\
app.get("/viewComment/:slug", ensureAuth, function(req, res) {
  let homePageusername = req.user.slug
  viewIndividualComment(req.params.slug)

    .then(function(comment) {
      // console.log("this is the request slug", req.params.slug);

      res.send(renderComment(comment.rows[0]));
    })
    .catch(function(err) {
      // console.error(err);
      res.status(404).send("  ");
    });
});
app.post("/comments", function(req, res) {
  createcomments(req.body)
    .then(function() {
      res.send(mustache.render(viewCommentTemplate));
    })
    .catch(function() {
      res.status(500).send("something went wrong");
    });
});
app.post("/comments/:slug", function(req, res) {
  console.log("You've left a comment");
  console.log(req.params);
  viewIndividualComment(req.params.slug).then(function(comments) {
    console.log(comments);
    res.send("this worked");
  });
});

//--------------------------------------\\
//     RENDERING POSTS TO HOME PAGE      \\
//--------------------------------------\\

<<<<<<< HEAD
app.get("/home", ensureAuth, function(req, res) {
  let homePageusername = req.user.slug

  getAllPosts(req.body)
  .then(function(allPosts) {
    // console.debug(allPosts.user);
=======
app.get("/home", function(req, res) {
  getAllPosts(req.body).then(function(allPosts) {
    console.log('get all posts is running)')
>>>>>>> authentication
    res.send(
      mustache.render(homepageTemplate, {
        PostsListHTML: renderAllPosts(allPosts.rows),
        userRoute: homePageusername
      })
    );
  }).catch(function(err){
    console.log(err)
    res.send("something went wrong")
  });
});

app.get("/Commenthome", function(req, res) {
  getAllComments(req.body).then(function(allcomments) {
    // console.debug(allPosts);
    res.send(
      mustache.render(viewCommentTemplate , {
        CommentListHTML: renderAllComments(allcomments.rows)
      })
    );
  });
});


//--------------------------------------\\
//            NEW USER ROUTES           \\
//--------------------------------------\\

app.post("/signup", (req, res, nextFn) => {
  if (emailIsValid(req.body.email)) {
    addUser(req.body)
      .then(() => {
        res.redirect("/home");
      })
      .catch(function(err) {
        if (err.constraint.includes("username")) {
          res.send("Duplicate username, please choose a different username.");
        } else if (err.constraint.includes("email")) {
          res.send(
            "This email is already in use, please use a different email."
          );
        } else {
          res.send("addUser - Something went wrong.");
        }
        // console.error(err);
      });
  } else {
    res.send('Your email is invalid, please format your email such as "Email@Example.com"')
  }
  // .catch(err => {
  //   res.status(500).send("this is the error " + err);
  //   console.log("this is the catch under new user routes" + err);
  // });
});

app.get("/signup", (req, res) =>
  res.sendFile("./templates/newUser.html", { root: __dirname })
);

//--------------------------------------\\
//            Authentication            \\
//--------------------------------------\\

app.get("/login", (req, res) => res.sendFile("auth.html", { root: __dirname }));

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (info) {
      return res.send(info.message);
    }
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/no-user");
    }
    req.login(user, err => {
      if (err) {
        return next(err);
      }
      return res.redirect("/home");
    });
  })(req, res, next);
});

app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/login");
});

app.get("/success", (req, res) =>
  res.send("Welcome " + req.query.email + "!!")
);
app.get("/error", (req, res) => res.send("error logging in"));

function ensureAuth(req, res, next) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    next();
    // res.redirect("/home")
  } else {
    res.redirect("/login");
  }
}

//--------------------------------------\\
//           ATTAGORY ROUTES            \\
//--------------------------------------\\

// add new Attagory

app.get("/attagories/addNew", function(req, res) {
  let homePageusername = req.user.slug
  res.send(mustache.render(newAttagoryPage, {
    userRoute: homePageusername
  })); //has the submit form
});


//Adds in new post

app.post("/attagories/addNew", function(req, res) {
  newAttagoryToDB(req.body) //adds post
    .then(function() {
      res.send(
        `<h1>You created a new attagory! Click <a href="/attagories/addNew">here</a> to create another!</h1>`
      );
    })
    .catch(function(err) {
      console.error(err);
      res.status(500).send("you did not submit an attagory");
    });
});


//View individual Attagory


app.get('/attagories/:slug', function(req, res) {
  let homePageusername = req.user.slug  
  getAttagoryID(req.params.slug)
  .then(function(relevantAttagory) {
    console.log(relevantAttagory.rows[0].attagory_name, 'this is the attagory name')
    let attagoryName = relevantAttagory.rows[0].attagory_name.toUpperCase()
    getRelevantPosts(relevantAttagory.rows[0].id)
    .then(function(postsObject) {
      console.log(attagoryName)
      res.send(mustache.render(ViewAttagoryPage, { attagoryName: attagoryName, allPostsHTML: renderAttagoryPosts(postsObject), userRoute: homePageusername }))
      .then(function() {
        console.log('done')
      })
    })
  })
})

//view all attagories

app.get("/attagories", function(req, res) {
  let homePageusername = req.user.slug
  getAllAttagories()
  .then(function(attagoryList) {
    console.log(attagoryList.rows)
    res.send(mustache.render(allAttagoryPage, {
      allAttagoryList: renderAllAttagories(attagoryList.rows),
      userRoute: homePageusername
    }))
    
  })
})


//--------------------------------------\\
//           PROFILE ROUTES             \\
//--------------------------------------\\

app.get('/users/:slug', function(req, res) {
  // console.log(req.params.slug)
  let homePageusername = req.user.slug
  getUserInfoFromUserTable(req.params.slug)
  .then(function(userData) {
    console.log(userData.rows)
    const profileUsername = userData.rows[0].username
    getAllUserInfo()
    .then(function(userJoinData) {
      console.log(userJoinData.rows)
      res.send(mustache.render(userProfilePage, {
        username: profileUsername,
        allPostsHTML: renderUserPosts(userJoinData.rows),
        allCommentsHTML: renderUserComments(userJoinData.rows),
        userRoute: homePageusername
      }))
    })

  })
});

// res.send('hello')

function renderUserPosts (userPostArray) {
  return '<ul>' + userPostArray.map(renderIndividualUserPost).join('') + '</ul>'
}

function renderUserComments (userPostArray) {
  return '<ul>' + userPostArray.map(renderIndividualUserComments).join('') + '</ul>'
}

function renderIndividualUserComments (postFromDb) {
  console.log('I am rendering this comment', postFromDb.comment_id)
   return `
    <div class="card border cardFix border-secondary">
  <div class="card-body border border-primary">
    <a href="/viewpost/${postFromDb.post_slug}"><h2>${postFromDb.post_title}</h2></a>
    <p class="card-text"><strong>Comment:&nbsp;</strong>${postFromDb.comment_content}</p>
    
  </div>
</div>

    `
}

function renderIndividualUserPost (postFromDb) {
  console.log('I am rendering this post', postFromDb.title)
   return `
    <div class="card border cardFix border-secondary">
  <div class="card-body border border-primary">
    <a href="/viewpost/${postFromDb.post_slug}"><h2>${postFromDb.post_title}</h2></a>
    
  </div>
</div>

    `
}
function getAllUserInfo () {

  const userJoinQuery = `
  SELECT
	users.id,
	users.username,
	users.total_attaboys,
	posts.title AS post_title,
	posts.id AS post_id,
	posts.post_slug,
	comments.id AS comment_id,
	comments.content AS comment_content
	 FROM users
	 	JOIN posts ON posts.post_author = users.id
	 	JOIN comments ON comments.comment_author = users.id AND comments.post_id = posts.id;
  `

  return db.raw(userJoinQuery)
}

function getUserInfoFromUserTable (slug) {

  const userTableQuery = `
    SELECT *
      FROM users
        WHERE slug ='${slug}'
  `;

  return db.raw(userTableQuery)

}







app.listen(port, () => {
  log.info("Listening on port " + port + " 🎉🎉🎉");
});

