var firebaseConfig = {
    apiKey: "AIzaSyDxQNs98DvI1ZReY1IXrNC7MJazZ4LXgAc",
    authDomain: "project44-f35d1.firebaseapp.com",
    databaseURL: "https://project44-f35d1-default-rtdb.firebaseio.com",
    projectId: "project44-f35d1",
    storageBucket: "project44-f35d1.appspot.com",
    messagingSenderId: "129960493560",
    appId: "1:129960493560:web:f8274ec2a098508705960d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like:0;
    });
}
