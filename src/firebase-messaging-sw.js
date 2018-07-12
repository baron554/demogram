// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
// var config = {
//   apiKey: "AIzaSyCm4IrOM0XMQAA-26OE7uyM5EzP4HXkTPI",
//   authDomain: "instagram-4b834.firebaseapp.com",
//   databaseURL: "https://instagram-4b834.firebaseio.com",
//   projectId: "instagram-4b834",
//   storageBucket: "instagram-4b834.appspot.com",
//   messagingSenderId: "726246956477"
// };

var config = {
  apiKey:"AIzaSyBFdCn1yaAWKe333vHn7K-Cro-vjfML1ZE",
  authDomain: "instagram-c6da0.firebaseapp.com",
  databaseURL: "https://instagram-c6da0.firebaseio.com",
  projectId: "instagram-c6da0",
  storageBucket: "instagram-c6da0.appspot.com",
  messagingSenderId: "527949106663"
}
// firebase.initializeApp(config);
firebase.initializeApp({
  'messagingSenderId': '527949106663'
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
