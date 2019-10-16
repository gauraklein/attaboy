const fs = require("fs");

//Express Server
const express = require("express");
const app = express();
const port = 3000;
const { db } = require("./modules/db/dbConnection.js");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Modules
const log = require("./modules/logging.js");
const mustache = require("mustache");
const { newPostToDB } = require('./modules/newPostFunctions.js')
const { viewIndividualPost, renderPost, prettyPrintJSON } = require('./modules/viewPostFunctions')

//Templating


const newPostPage = fs.readFileSync('./templates/newPost.mustache', 'utf8');
const viewPostTemplate = fs.readFileSync('./templates/viewPost.mustache', 'utf8')

app.listen(port, () => {
   log.info("Listening on port " + port + " 🎉🎉🎉");
});
//--------------------------------------\\
//           NEW POST ROUTES            \\
//--------------------------------------\\

//Adds in new post

app.post('/newpost', function(req, res) {
    newPostToDB(req.body) //adds post
    .then(function () {
        
        res.send(`<h1>You submitted a post! Click <a href="/newpost">here</a> to submit another!</h1>`)
      })
      .catch(function (err) {
          console.error(err)
        res.status(500).send('you did not submit a post')
      })
})

///displays newpost form

app.get('/newpost', function(req, res) {
    res.send(mustache.render(newPostPage)) //has the submit form
})


//--------------------------------------\\
//          VIEW POST ROUTES            \\
//--------------------------------------\\

app.get('/viewpost/:slug', function(req, res) {
    viewIndividualPost(req.params.slug)
    // res.send(viewPostTemplate)
    .then(function (post) {
    console.log('this is the request slug',req.params.slug)
        console.log(post.rows[0].title)
        res.send(renderPost(post.rows[0]))
      })
      .catch(function (err) {
          console.error(err)
        res.status(404).send('that post has not been posted yet')
      })
})

//--------------------------------------\\
//            Authentication            \\
//--------------------------------------\\
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy((email, password, done) => {
  console.log('got auth request') 
  db('users')
  .where({email: email})
  .then((userRows) => {
    let user = userRows[0]
    if (!user) {
      return done(null, false);
    }
    
    if (user.password != password) {
      return done(null, false);
    }
    return done(null, user);
  })
  .catch(err => {
    console.log('auth error - ', err)
  });
}
));


app.get('/auth', (req, res) => res.sendFile('auth.html', { root : __dirname}));


app.post('/auth',
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    req.session.passport
    res.redirect('/success?email='+req.user.email);
  }
  );

app.get('/success', (req, res) => res.send("Welcome "+req.query.email+"!!"));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  console.log("seiralize user -", user.id)

  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});

function ensureAuth(req, res, next) {
  if (passport.authenticate('local')) {
    console.log("user -", req.user)
    return next();
  }

  console.log('ensureAuth failed! ')
  res.redirect('/auth')
}