const fs = require("fs");

//Express Server
const express = require("express");
const app = express();
const port = 3000;
const { db } = require("./modules/db/dbConnection");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Modules
const log = require("./modules/logging.js");
const mustache = require("mustache");
const { addUser } = require("./modules/authentication/newUser.js");

//Templating

const newPostPage = fs.readFileSync("./templates/newPost.mustache", "utf8");
const viewPostTemplate = fs.readFileSync(
  "./templates/viewPost.mustache",
  "utf8"
);

app.listen(port, () => {
  log.info("Listening on port " + port + " 🎉🎉🎉");
});
//--------------------------------------\\
//           NEW POST ROUTES            \\
//--------------------------------------\\

let postID = 21; //var to make sure that the post id is correct
app.post("/newpost", ensureAuth, function(req, res) {
  newPostToDB(req.body) //adds post
    .then(function() {
      postID++; //increments id
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
  res.send(mustache.render(newPostPage)); //has the submit form
});

//--------------------------------------\\
//         NEW POST FUNCTIONS           \\
//--------------------------------------\\

function newPostToDB(post) {
  return db.raw(
    "INSERT INTO posts (id, title, content, slug) VALUES (?, ?, ?, ?)",
    [postID, post.title, post.content, post.title]
  );
}

//--------------------------------------\\
//          VIEW POST ROUTES            \\
//--------------------------------------\\

app.get("/viewpost/:slug", ensureAuth, function(req, res) {
  viewIndividualPost(req.params.slug)
    // res.send(viewPostTemplate)
    .then(function(post) {
      console.log("this is the request slug", req.params.slug);
      console.log(post.rows[0].title);
      res.send(renderPost(post.rows[0]));
    })
    .catch(function(err) {
      console.error(err);
      res.status(404).send("that post has not been posted yet");
    });
});

//--------------------------------------\\
//        VIEW POST FUNCTIONS           \\
//--------------------------------------\\

function viewIndividualPost(slug) {
  return db.raw("SELECT * FROM posts WHERE slug = ?", [slug]);
}

function renderPost(postFromDb) {
  return `
    <h1>${postFromDb.title}</h1>
    <h4>${postFromDb.content}</h4>
    <p>posted by: ${postFromDb.post_author}</p>
    <p>total attaboys: ${postFromDb.post_attaboys}</p>
    
    `;
}
function prettyPrintJSON(x) {
  return JSON.stringify(x, null, 2);
}

//--------------------------------------\\
//            NEW USER ROUTES           \\
//--------------------------------------\\

app.post("/newUser", (req, res, nextFn) => {
  addUser(req.body)
    .then(() => {
      res.send("Added user successfully");
    })
    .catch(err => {
      res.status(500).send("this is the error" + err);
      console.err(err);
    });
});

app.get("/newUser", (req, res) =>
  res.sendFile("newUser.html", { root: __dirname })
);

//--------------------------------------\\
//            Authentication            \\
//--------------------------------------\\
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy((username, password, done) => {
    console.log("got auth request");
    db("users")
      .where({ username: username })
      .then(userRows => {
        let user = userRows[0];
        if (!user) {
          return done(null, false);
        }

        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      })
      .catch(err => {
        console.log("auth error - ", err);
      });
  })
);

app.get("/auth", (req, res) => res.sendFile("auth.html", { root: __dirname }));

app.post(
  "/auth",
  passport.authenticate("local", { failureRedirect: "/error" }),
  function(req, res) {
    req.session.passport;
    res.redirect("/success?email=" + req.user.username);
  }
);
// res.redirect('/success?email='+req.user.username);

app.get("/success", (req, res) =>
  res.send("Welcome " + req.query.email + "!!")
);
app.get("/error", (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  console.log("seiralize user -", user.id);

  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});

function ensureAuth(req, res, next) {
  if (passport.authenticate("local")) {
    console.log("user -", req.user);
    return next();
  }

  console.log("ensureAuth failed! ");
  res.redirect("/auth");
}
