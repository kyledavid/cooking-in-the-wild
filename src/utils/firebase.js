const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyC25UrENXk6fM7V8DYmSYEIVAw-KQ_Ie4M",
    authDomain: "cooking-in-the-wild.firebaseapp.com",
    databaseURL: "https://cooking-in-the-wild.firebaseio.com",
    projectId: "cooking-in-the-wild",
    storageBucket: "cooking-in-the-wild.appspot.com",
    messagingSenderId: "1056037134814"
  };

firebase.initializeApp(config);

module.exports = firebase;
