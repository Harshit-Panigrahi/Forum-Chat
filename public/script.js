const socket = io("/");

let username = prompt("Enter your name:")

$(function () {
  $("#send").click(function () {
    msg = $("#msg-input").val();
    if (msg.length !== 0) {
      socket.emit("message", msg);
      $("#msg-input").val("");
    }
  });
  
  $("#msg-input").keydown(function (e) {
    msg = $("#msg-input").val();
    if (e.key == "Enter" && msg.length !== 0) {
      socket.emit("message", msg);
      $("#msg-input").val("");
    }
  });
});

socket.on("createMessage", (message) => {
  $(".messages").append(
    `<div class="message">
      <span>${username}: ${message}</span>
    </div>`
  );
});
