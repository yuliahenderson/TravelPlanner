  const firebase = require('firebase');

  var config = {
    apiKey: "AIzaSyBlZUq7XVSyEnJbvWMKH9bhjNqPNg0BnNA",
    authDomain: "travel-planner-65a26.firebaseapp.com",
    databaseURL: "https://travel-planner-65a26.firebaseio.com",
    storageBucket: "travel-planner-65a26.appspot.com",
    messagingSenderId: "1048192343473",
  };
  firebase.initializeApp(config);

module.exports = firebase;
