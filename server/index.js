'use strict';

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportConfig = require('./passport');
const session = require('express-session');
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));
// Static File Service
//app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//passport (인증을 위해 사용)
app.use(session({secret:"MySecret"})); //session 사용
app.use(passport.initialize()); //passport초기화
app.use(passport.session()); //passport와 session연결
//passportConfig();

const port = process.env.PORT || 5000; // use 9000 port

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

// Node의 native Promise 사용
mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', function(){
//     // CONNECTED TO MONGODB SERVER
//     console.log("Connected to mongod server");
// });
// Connect to MongoDB
mongoose.connect('mongodb://localhost/mongodb_test')
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

  // ROUTERS
app.use('/', require('./routes/users'));

app.use(function(req,res,next){
 res.locals.isAuthenticated = req.isAuthenticated();
 res.locals.currentUser = req.user;
 next();
})

app.get('/about', (req, res) => {
  console.log('about');
  //console.log(res.locals.isAuthenticated);
  res.send({ express: 'Hello From Express' });
});

app.get('/logout', (req, res) => {
  console.log("trying to logout....")
   req.session.destroy()
   req.logout();
})

app.get('/user', (req, res) => {
    console.log(res.locals.isAuthenticated);
    //console.log(req);
  var tt = req.isAuthenticated();
  console.log(tt);
  if(req.isAuthenticated()) {
    console.log(req.sessionID)
    console.log('isAuthenticated!!');
    res.send(true);
  } else {
    res.send('');
  }
  //console.log(req.sessionID);
});

app.get('/session_chk', (req, res) => {
  if(req.isAuthenticated()) {
    console.log(req.sessionID)
    console.log('isAuthenticated!!');
    res.send(true);
  } else {
    res.send('');
  }
  //console.log(req.sessionID);
});

//app.use(express.static(path.join(__dirname)));
app.listen(port, () => console.log(`Server listening on port ${port}`));
