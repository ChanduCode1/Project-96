var firebaseConfig = {
    apiKey: "AIzaSyBodxXdErDx4a5Q3uyUu6EczqZZ4-WKwEk",
    authDomain: "kwitter-23f1f.firebaseapp.com",
    databaseURL: "https://kwitter-23f1f-default-rtdb.firebaseio.com",
    projectId: "kwitter-23f1f",
    storageBucket: "kwitter-23f1f.appspot.com",
    messagingSenderId: "296420491859",
    appId: "1:296420491859:web:a669b601b6d18d1a42fca6"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);//YOUR FIREBASE LINKS

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });

    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
