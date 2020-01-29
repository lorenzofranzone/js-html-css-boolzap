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

  $('.all-chats-search input').keyup(function(){
    var text = $('.all-chats-search input').val().toLowerCase();

    $('.single-chat').each(function(){
      var contactName = $(this).find('.title').text().toLowerCase();

      if (contactName.includes(text) == true){
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });


  // Main Chat
  $('.send-message').click(function(){
    sendMessage();
    getAnswer();
    // RIVEDERE IL CAMBIAMENTO DELL'ICONA SE SCRIVO UN MESSAGGIO MA NON INVIO
  });
  // Keypress
  $('.text-send-message').keypress(function(event){
    if (event.which == 13) {
      sendMessage();
      getAnswer();
    }
  });


  // Dropdown Message
  $(".dropicon").on("click", function (event) {
    $('ul.dropdown').removeClass("active");
    $(this).parent().find('ul.dropdown').addClass("active");
    event.stopPropagation();
  });

  $("body").on("click", function () {
    $('ul.dropdown').removeClass('active');
  });


  // Message Icon send
  $(".text-send-message").on("click", function () {
    $('.block-write-message i.send-message').attr("class","fas fa-paper-plane send-message");
  });

  $(".block-write-message i.send-message").on("click", function () {
    $(this).attr("class","fas fa-microphone send-message");
  });

  // Single Chat Right Block
  $(document).on("click", '.single-chat', function () {
    var data = $(this).attr('data-contact');
    var selector = '.block-single-chat[data-contact="' + data + '"]';
    $('.block-single-chat').removeClass('active');
    $(selector).addClass('active');
  });







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

      $('.block-single-chat.active').append(newMessage);

      $('input.text-send-message').val('');
    }
  }

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

    $('.block-single-chat.active').append(newMessage);
  }

  // FX Add Zero to Minutes < 10
  function addZero(num) {
    if (num < 10) {
      num = '0' + num;
    }
    return num;
  }

  // FX Scroll
  function scrollChat() {
    var heightChatWindow = $('.block-single-chat.active').height();
    $('.wrapper-single-active-chat').scrollTop(heightChatWindow);
  }

/////
}); // Document Ready
