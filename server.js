const fs = require("fs");

//Express Server
const express = require("express");
const app = express();
const port = 3000;
const { db } = require("./modules/db/dbConnection");
const session = require("express-session");
// const FileStore = require('session-file-store')(session);
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy((username, password, done) => {
    console.log("got auth request");
    db("users")
    .where({ username: username })
    .then(res => {
      // console.log(userRows)
      const user = res[0];
      if (!user) {
        console.log("User not found");
        done(null, false);
      }

      if (user.password != password) {
        console.log("Wrong Password");
        done(null, false);
      }
      console.log("user found");
      return done(null, user);
    })
    .catch(err => {
      console.log("auth error - ", err);
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
  console.log("seiralize user -", user.id);
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

//Modules
const log = require("./modules/logging.js");
const mustache = require("mustache");
const { newPostToDB } = require('./modules/newPostFunctions.js')
const { viewIndividualPost, renderPost, prettyPrintJSON } = require('./modules/viewPostFunctions')
const { renderAttagoryPosts, getAttagoryID, getRelevantPosts, newAttagoryToDB } = require('./modules/attagoryFunctions')
const { addUser } = require("./modules/authentication/newUser.js");
const uuidv1 = require("uuidv1");

//Templating
const newPostPage = fs.readFileSync("./templates/newPost.mustache", "utf8");
const viewPostTemplate = fs.readFileSync(
  "./templates/viewPost.mustache",
  "utf8"
);


const newPostPage = fs.readFileSync('./templates/newPost.mustache', 'utf8');
const viewPostTemplate = fs.readFileSync('./templates/viewPost.mustache', 'utf8')
const newAttagoryPage = fs.readFileSync('./templates/newAttagory.mustache', 'utf8')
const ViewAttagoryPage = fs.readFileSync('./templates/viewAttagory.mustache', 'utf8')



//--------------------------------------\\
//           NEW POST ROUTES            \\
//--------------------------------------\\


// FIX ROUTING FOR NEW POSTS - CHANGED DURING MERGE************

app.post("/newpost", ensureAuth, (req, res, next) => {
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
  console.log(req.user)
  res.send(mustache.render(newPostPage)); //has the submit form
});

//--------------------------------------\\
//         NEW POST FUNCTIONS           \\
//--------------------------------------\\

function newPostToDB(post) {
  slug = uuidv1();
  return db.raw("INSERT INTO posts (post_author, title, content, slug) VALUES (?, ?, ?, ?)", [
    post.user.id,
    post.body.title,
    post.body.content,
    slug
  ]);
}

//--------------------------------------\\
//          VIEW POST ROUTES            \\
//--------------------------------------\\

const homepageTemplate = fs.readFileSync("./homepage.mustache", "utf8");


app.get("/viewpost/:slug", ensureAuth, function(req, res) {
  viewIndividualPost(req.params.slug)
    .then(function(post) {
      console.log("this is the request slug", req.params.slug);

      res.send(renderPost(post.rows[0]));
    })
    .catch(function(err) {
      console.error(err);
      res.status(404).send("that post has not been posted yet");
    });
});
app.post("/posts", function(req, res) {
  createposts(req.body)
    .then(function() {
      res.send(mustache.render(homepageTemplate));
    })
    .catch(function() {
      res.status(500).send("something went wrong");
    });
});
app.post("/posts/:slug", function(req, res) {
  console.log("post attempted");
  console.log(req.params);
  viewIndividualPost(req.params.slug).then(function(posts) {
    console.log(posts);
    res.send("this worked");
  });
});

//--------------------------------------\\
//        VIEW POST FUNCTIONS           \\
//--------------------------------------\\
const getAllPostsQuery = `
  SELECT *
  FROM Posts
`;

function viewIndividualPost(slug) {
  return db.raw("SELECT * FROM posts WHERE slug = ?", [slug]);
}


function renderAllPosts(allPosts) {
  return '<form action="/posts/:slug" method ="posts"> <ul>' + allPosts.map(renderPost).join('') + '</ul></form>'
}
function createPosts(posts) {
  return db.raw(
    "INSERT INTO Cohorts (title, slug, isActive) VALUES (?, ?, true)",
    [posts.title, posts.slug]
  );
}
//--------------------------------------\\
//     RENDERING POST TO HOME PAGE      \\
//--------------------------------------\\

app.get("/home", function(req, res) {
  getAllPosts(req.body).then(function(allPosts) {
    console.log(allPosts);
    res.send(
      mustache.render(homepageTemplate, {
        PostsListHTML: renderAllPosts(allPosts.rows)
      })
    );
  });
});
//            NEW USER ROUTES           \\
//--------------------------------------\\

app.post("/sign-up", (req, res, nextFn) => {
  addUser(req.body)
    .then(() => {
      res.send("Added user successfully");
    })
    .catch(err => {
      res.status(500).send("this is the error" + err);
      console.err(err);
    });
});

app.get("/sign-up", (req, res) =>
  res.sendFile("newUser.html", { root: __dirname })
);

//--------------------------------------\\
//            Authentication            \\
//--------------------------------------\\

app.get("/auth", (req, res) => res.sendFile("auth.html", { root: __dirname }));

app.post("/auth", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (info) {
      return res.send(info.message);
    }
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/auth");
    }
    req.login(user, err => {
      if (err) {
        return next(err);
      }
      return res.redirect("/auth");
    });
  })(req, res, next);
});


app.get("/success", (req, res) =>
  res.send("Welcome " + req.query.email + "!!")
);
app.get("/error", (req, res) => res.send("error logging in"));

function ensureAuth(req, res, next) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/auth");
  }



}

//--------------------------------------\\
//           ATTAGORY ROUTES            \\
//--------------------------------------\\

// add new Attagory

app.get('/attagories/addNew', function (req, res) {
  res.send(mustache.render(newAttagoryPage)) //has the submit form
})

//Adds in new post

app.post('/attagories/addNew', function(req, res) {
  newAttagoryToDB(req.body) //adds post
  .then(function () {
      
      res.send(`<h1>You created a new attagory! Click <a href="/attagories/addNew">here</a> to create another!</h1>`)
    })
    .catch(function (err) {
        console.error(err)
      res.status(500).send('you did not submit an attagory')
    })
})

//View Attagory

app.get('/attagories/:slug', function (req, res) {
  getAttagoryID(req.params.slug)
  .then(function(attagory) {
    console.log('this is the attagory id', attagory.rows[0].id)
    getRelevantPosts(attagory.rows[0].id)
    .then(function(postsObject) {
      console.log('this is the number of posts', postsObject.rows.length)
      var postHTML = renderAttagoryPosts(postsObject.rows)
        console.log('these are all the posts', postHTML)
        res.send(mustache.render(ViewAttagoryPage, { allPostsHTML: postHTML }))
    })
  })
  .catch(function(err) {
    console.error(err)

  })
})
app.listen(port, () => {
  log.info("Listening on port " + port + " 🎉🎉🎉");
});
