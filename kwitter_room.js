


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
  document.getElementById("user_name").innerHTML = "welcome" + user_name;

  function addRoom (){
    room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
})
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html"

  }

  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  
  //End code
  });});}
  getData();

function redirectToRoomName(){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
