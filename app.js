// 🔄 Replace with your Firebase config here:
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database();

function sendMessage() {
  const name = document.getElementById("username").value.trim();
  const text = document.getElementById("message").value.trim();
  if (!name || !text) return;
  db.ref("messages").push({ name, text });
  document.getElementById("message").value = "";
}

db.ref("messages").on("child_added", function(snapshot) {
  const msg = snapshot.val();
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML += `<div class="msg"><strong>${msg.name}:</strong> ${msg.text}</div>`;
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
