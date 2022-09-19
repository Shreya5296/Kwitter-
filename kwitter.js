const firebaseConfig = {
    apiKey: "AIzaSyCXF-yVmoSZDgl5GGK2kaYZYGyiqY4AIrk",
    authDomain: "kwitter-da884.firebaseapp.com",
    databaseURL: "https://kwitter-da884-default-rtdb.firebaseio.com",
    projectId: "kwitter-da884",
    storageBucket: "kwitter-da884.appspot.com",
    messagingSenderId: "203061415632",
    appId: "1:203061415632:web:cbcebab2c3de73bcb258d5"
  };

firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";

    console.log(user_name)
}