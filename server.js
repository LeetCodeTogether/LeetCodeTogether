// Required dependencies 
const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const GitHubStrategy = require('passport-github');
const cookieSession = require('cookie-session');
var findOrCreate = require('mongoose-findorcreate')
const mongoose = require('mongoose');

//Configure Mongoose
mongoose.connect('mongodb://localhost/code-together');
mongoose.set('debug', true);

// Initialize users database
const { Schema } = mongoose;
const UsersSchema = new Schema({
  githubId: Number,
  username: String,
  name: String,
}).plugin(findOrCreate);
const Users = mongoose.model('Users', UsersSchema);

// cookieSession config
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: ['jerryandericmadethebestappeverrrr']  // secret key to hash cookie ;)
}));

app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions

// Strategy config
passport.use(new GitHubStrategy({
    clientID: 'Iv1.661622fe77dff4e6',
    clientSecret: 'bf5e82daa699443f781424185a5db7ffcfb93fe9',
    callbackURL: "http://localhost:5000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    Users.findOrCreate({ githubId: profile.id }, { username: profile.username, name: profile.displayName }, function (err, user) {
        console.log(profile);
      return done(err, user);
    });
  }
));

// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
    done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
    done(null, user);
});

// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.send('You must login!');
    }
}

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build/')));

// Routes
app.get('/', (req, res) => {
    if (req.user) {
        // do something
    }
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
});

// passport.authenticate middleware is used here to authenticate the request
app.get('/auth/github', passport.authenticate('github', {
    scope: ['(no scope)'] // Used to specify the required data; we only want read-only access to public information
}));

// The middleware receives the data from Google and runs the function on Strategy config
app.get('/auth/github/callback', passport.authenticate('github'), (req, res) => {
    res.redirect('/');
});

// Secret route
app.get('/secret', isUserAuthenticated, (req, res) => {
    res.send('You have reached the secret route');
});

// Logout route
app.get('/logout', (req, res) => {
    req.logout(); 
    res.redirect('/');
});

app.listen(5000, () => {
    console.log('Server Started!');
});