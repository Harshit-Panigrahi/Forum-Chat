const socket = io("/");

$(function () {
  $("#send").click(function () {
    msg = $("#chat_message").val();
    if (msg.length !== 0) {
      socket.emit("message", msg);
      $("#chat_message").val("");
    }
  });
  $("#chat_message").keydown(function (e) {
    msg = $("#chat_message").val();
    if (e.key == "Enter" && msg.length !== 0) {
      socket.emit("message", msg);
      $("#chat_message").val("");
    }
  });
});

socket.on("createMessage", (message) => {
  $(".messages").append(`
        <div class="message">
            <span>${message}</span>
        </div>
    `);
});
