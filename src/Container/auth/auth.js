import { auth, googleProvider } from '../../firebase';
import Store,{MyContext} from '../../ContextApi/Store';

var user;

export function googleLogin() {
    
    
    //return  auth.signInWithPopup(googleProvider);

      auth.signInWithPopup(googleProvider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
            user = result.user;
            //  console.log(user)
           window.location="/create";
         
          if (user != null) {
            user.providerData.forEach(function (profile) {
              console.log("Sign-in provider: " + profile.providerId);
              console.log("  Provider-specific UID: " + profile.uid);
              console.log("  Name: " + profile.displayName);
              console.log("  Email: " + profile.email);
              console.log("  Photo URL: " + profile.photoURL);
            });
          }
        
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

export function getUser()
{  
 // user = auth.currentUser;
  //.log(user);

auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      
      var email = user.email;
      console.log(email);
      var emailVerified = user.emailVerified;
   
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
    

      

    } else {
      
    }
  });
  


  
  // if (user) {
  //   user.providerData.forEach(function (profile) {
  //     console.log("Sign-in provider: " + profile.providerId);
  //     console.log("  Provider-specific UID: " + profile.uid);
  //     console.log("  Name: " + profile.displayName);
  //     console.log("  Email: " + profile.email);
  //     console.log("  Photo URL: " + profile.photoURL);

  //     return profile.displayName;
  //   });
    
  // }
  
}
