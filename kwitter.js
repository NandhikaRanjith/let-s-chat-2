function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyBhbTo0Q4jgq6kfeFZQ4ls4zepS-GN1bOM",
    authDomain: "let-s-chat-8a6f5.firebaseapp.com",
    projectId: "let-s-chat-8a6f5",
    storageBucket: "let-s-chat-8a6f5.appspot.com",
    messagingSenderId: "627890575634",
    appId: "1:627890575634:web:3b5b25b3ccabe3eaf7fbcb"
  };