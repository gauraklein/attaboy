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
  getAllPosts
} = require("./modules/viewPostFunctions");
const {
  renderAttagoryPosts,
  getAttagoryID,
  getRelevantPosts,
  newAttagoryToDB,
  renderAttagoriesList,
  renderIndivdualAttagory,
  getAllAttagories
} = require("./modules/attagoryFunctions");
const { addUser } = require("./modules/authentication/newUser.js");
const uuidv1 = require("uuidv1");

//Templating
const newCommentPage = fs.readFileSync("./templates/newComment.mustache", "utf8");
const newPostPage = fs.readFileSync("./templates/newPost.mustache", "utf8");
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
        }
        console.log("User found");
        return done(null, user);
      })
      .catch(err => {
        console.error("Local strategy error - ", err);
        done(err);
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
  getAllAttagories()
  .then(function(allAttagories) {
      console.log(allAttagories, 'these are the attagories')
    res.send(
      mustache.render(newPostPage, {
        allAttagoriesHTML: renderAttagoriesList(allAttagories.rows)
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

app.get("/viewpost/:slug", function(req, res) {
  // console.log(req.params.slug);
  viewIndividualPost(req.params.slug)
    .then(function(post) {
      // console.log("this is the request slug", req.params.slug);
      // console.log(post);
      res.send(renderSinglePost(post.rows[0]));
    })
    .catch(function(err) {
      // console.error(err);
      res.status(404).send("that post has not been posted yet");
    });
});


//--------------------------------------\\
//        NEW COMMENT ROUTS             \\
//--------------------------------------\\

app.post("/newComment", ensureAuth, (req, res, next) => {
  console.log('this is the req', req.params)
  NewCommentToDB(req)
    .then(function(comment) {
      res.send('/viewComment/' + comment.slug);
    })
    .catch(function(err) {
      console.error(err);
      res.status(500).send("Comment not sent");
    });
});

app.get("/newComment", ensureAuth, function(req, res) {
  console.log(req.user);
  res.send(mustache.render(newCommentPage)); //has the submit form
});

//--------------------------------------\\
//        VIEW COMMENT ROUTS            \\
//--------------------------------------\\
app.get("/viewComment/:slug", ensureAuth, function(req, res) {
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

app.get("/home", function(req, res) {
  getAllPosts(req.body).then(function(allPosts) {
    // console.debug(allPosts);
    res.send(
      mustache.render(homepageTemplate, {
        PostsListHTML: renderAllPosts(allPosts.rows)
      })
    );
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
  res.send(mustache.render(newAttagoryPage)); //has the submit form
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


//View Attagory

app.get("/attagories/:slug", function(req, res) {

  getAttagoryID(req.params.slug)
    .then(function(attagory) {
      console.log("this is the attagory id", attagory.rows[0].id);
      getRelevantPosts(attagory.rows[0].id).then(function(postsObject) {
        // console.log("this is the number of posts", postsObject.rows);
        // console.log("these are all the posts", postHTML);
        res.send(
          // 'yayayayyaya'
          mustache.render(ViewAttagoryPage, { allPostsHTML: renderAttagoryPosts(postsObject.rows) })
          );
      });
    })
    .catch(function(err) {
      console.error(err);
    });
});


app.listen(port, () => {
  log.info("Listening on port " + port + " 🎉🎉🎉");
});
