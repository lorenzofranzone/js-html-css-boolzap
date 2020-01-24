$(document).ready(function(){

  // Code

  // Search Chat
  $(".all-chats-search input").on("click", function (event) {
    $('.all-chats-search').addClass("bgw");
    $('.all-chats-search i').attr("class","fas fa-arrow-left");
    $(this).attr("placeholder","");
    event.stopPropagation();
  });
  $("body").on("click", function () {
    $('.all-chats-search').removeClass('bgw');
    $('.all-chats-search i').attr("class","fas fa-search");
    $(".all-chats-search input").attr('placeholder','Cerca o inizia una nuova chat');
  });

  // Dropdown Message
  $(".dropicon").on("click", function (event) {
    $(this).next('ul.dropdown').addClass("d-block");
    event.stopPropagation();
  });
  $("body").on("click", function () {
    $('ul.dropdown').removeClass('d-block');
  });

  // Main Chat
  $('.send-message').click(function(){
    sendMessage();
    getAnswer();
    // RIVEDERE IL CAMBIAMENTO DELL'ICONA SE SCRIVO UN MESSAGGIO MA NON INVIO
  });

  // Message Icon send
  $(".text-send-message").on("click", function () {
    $('.block-write-message i.send-message').attr("class","fas fa-paper-plane send-message");
  });

  $(".block-write-message i.send-message").on("click", function () {
    $(this).attr("class","fas fa-microphone send-message");
  });

  // FX Answer
  var answer;
  function getAnswer() {
    answer = setTimeout(autoAnswer, 1000);
  }

  function autoAnswer() {
    var newMessage = $('.template .message').clone();
    newMessage.children('p').text('Risposta automatica');

    var date = new Date();
    var hours = date.getHours();
    var minutes = addZero(date.getMinutes());
    var time = hours + ':' + minutes;

    newMessage.children('span').text(time);
    newMessage.addClass('user');

    $('.block-single-chat').append(newMessage);
  }


  //////////////////////////////////////////////////
  // FUNCTIONS
  //////////////////////////////////////////////////

  // FX Send New Message
  function sendMessage() {
    var textMessage = $('input.text-send-message').val();

    if (textMessage.length != 0) {

      var newMessage = $('.template .message').clone();
      newMessage.children('p').text(textMessage);

      var date = new Date();
      var hours = date.getHours();
      var minutes = addZero(date.getMinutes());
      var time = hours + ':' + minutes;

      newMessage.children('span').text(time);
      newMessage.addClass('mine');

      $('.block-single-chat').append(newMessage);

      $('input.text-send-message').val('');

    }
  }

  // FX Add Zero to Minutes < 10
  function addZero(num) {
    if (num < 10) {
      num = '0' + num;
    }
    return num;
  }

/////
}); // Document Ready
