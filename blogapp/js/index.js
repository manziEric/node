var firebaseConfig = {
  apiKey: 'AIzaSyDxVpicql6X_a4_OCT9-V7c5Gj-XRXNn6g',
  authDomain: 'fir-webapp-594c9.firebaseapp.com',
  databaseURL: 'https://fir-webapp-594c9.firebaseio.com',
  projectId: 'fir-webapp-594c9',
  storageBucket: 'fir-webapp-594c9.appspot.com',
  messagingSenderId: '446042998300',
  appId: '1:446042998300:web:8ce17f79eeed6b0a0441d9'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// zorgt dat de gebruiker niet afgemeld wordt als de browser gesloten wordt
// tot de gebruiker zelf op afmelden drukt
firebase.auth.Auth.Persistence.LOCAL;

// $('#btn-login').click(function() {
//   let email = $('#email').val();
//   let password = $('#password').val();

//   console.log(email, password);

//   if (email != '' && password != '') {
//     let result = firebase.auth().signInWithEmailAndPassword(email, password);

//     result.catch(function(error) {
//       let errorCode = error.code;
//       let errorMessage = error.message;

//       window.alert('Message :' + errorMessage);
//     });
//   } else {
//     window.alert('Form is incomplete. Please fill out all fields.');
//   }
// });
function toggleSignIn() {
  if (firebase.auth().currentUser) {
    console.log(firebase.auth().currentUser);
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  } else {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Sign in with email and pass.
    // [START authwithemail]
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
    // [END authwithemail]
    window.location = 'MainPage.html';
  }
  document.getElementById('quickstart-sign-in').disabled = true;
}

function logout() {
  window.location = 'signin.html';
  firebase.auth().signOut();
}
