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

//Templating
// const homepageTemplate = fs.readFileSync('./templates/homepage.mustache', 'utf8');

// ensureAuth,








app.listen(port, () => {
  log.info("Listening on port " + port + " 🎉🎉🎉");
});


//Authentication
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