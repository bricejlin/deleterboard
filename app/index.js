'use strict';

var Firebase = require('firebase');

var server = require('server');
var github = require('github');

// var db = new Firebase('https://deleterboard.firebaseio.com/test');
// var dbRef = db.child('commits');

var INTERVAL_SECS = 30;

server.listen(3000, function () {
  console.log('Listening on port: 3000...');

  // setInterval(function () {
  // console.log('fetching data from api...');
  // github.getStats()
  //   .then(function (users) {
  //     dbRef.set({
  //       users: users
  //     });
  //     console.log('updated db!');
  //   });
  // }, INTERVAL_SECS * 1000);
});