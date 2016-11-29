// YOUR CODE HERE:
$(document).ready(function() {
  app.init();
});

var app = {};

var friends = [];

//Username shit
var hello = window.location.search;
console.log(hello);
hello = hello.slice(10);
console.log(hello);
/////////

app.init = function () {

  console.log('calling init');
  $('.sendMessage').on('click', function(event) {
    console.log('clicked');
    let $message = $('#clickMe').val();
    console.log($message, '$message');
    app.send($message);
  });
};

app.send = function (message) {

  console.log(message, 'message'),
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/messages',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
      $('#posts').append(`<li>${message}</li>`);
    },
    error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};



app.fetch = function (message) {
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    type: 'GET',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.clearMessages = function() {
  $('#chats').html('');
};

app.renderMessage = function () {
  $('#chats').prepend('<div class="chat"><span class="username">' + message.username + '</span>: ' + message.text + ' | ' + message.roomname + '</div>');
};

app.renderRoom = function () {
  $('#roomSelect').prepend('<option> roomName </option>');
};

app.handleUsernameClick = function () {
  friends.push();
};

app.handleSubmit = function () {

};
