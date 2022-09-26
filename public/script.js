const socket = io("/");

let username = prompt("Enter your name:");

$(function () {
  $("#send").click(function () {
    let msg = $("#msg-input").val();
    if (msg.length !== 0) {
      socket.emit("message", msg, username);
      $("#msg-input").val("");
    }
  });
  $("#msg-input").keydown(function (e) {
    let msg = $("#msg-input").val();
    if (e.key == "Enter" && msg.length !== 0) {
      socket.emit("message", msg, username);
      $("#msg-input").val("");
    }
  });
});

socket.on("newMsg", (msg, sender) => {
  console.log("hello");
  $(".messages").append(
    `<div class="message">
      <b class="username">${sender}:</b>
      <span>${msg}</span>
    </div>`
  );
});
