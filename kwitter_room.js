
const firebaseConfig = {
      apiKey: "AIzaSyCAxaRytgdmB-TDho_b9pDpwZi6CR_lycw",
      authDomain: "kwitter-c07d2.firebaseapp.com",
      databaseURL: "https://kwitter-c07d2-default-rtdb.firebaseio.com",
      projectId: "kwitter-c07d2",
      storageBucket: "kwitter-c07d2.appspot.com",
      messagingSenderId: "197360674834",
      appId: "1:197360674834:web:0164608ebe47fc8b8b90cb"
    };
  
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name -"+ Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+ Room_names+ " </div><hr> ";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose :"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "Kwitter_page.html";

      

}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location= "Kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}