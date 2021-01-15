// *********************************************************************	
// Initialize Firebase
// *********************************************************************	

const config = {
  apiKey: "AIzaSyDS4C4_EszhcVTTDzOQrM61nc7KWIcrqTY",
  authDomain: "himinsurance-dc80c.firebaseapp.com",
  projectId: "himinsurance-dc80c",
  storageBucket: "himinsurance-dc80c.appspot.com",
  messagingSenderId: "916611344043",
  appId: "1:916611344043:web:026e9872c9b5af643df9ee"
};

firebase.initializeApp(config);
let firestore = firebase.firestore();
let db = firebase.firestore();
let storage  = firebase.storage();
let auth = firebase.auth();
//var functions = firebase.functions();
console.log("Cloud Firestores Loaded");


// *********************************************************************	
// Enable offline capabilities
// *********************************************************************	
firebase.firestore().enablePersistence()
    .then(function() {
        // Initialize Cloud Firestore through firebase
        var db = firebase.firestore();
    })
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled in one tab at a a time.
            console.log("Multiple tabs open, persistence can only be enabled in one tab at a a time.");

        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
            console.log("The current browser does not support all of the eatures required to enable persistence");
        }
    });





