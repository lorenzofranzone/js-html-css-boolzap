$(document).ready(function(){

  // Code

  // Search Chat
  var searchIf = true;
  $(".all-chats-search input").on("click", function (event) {
    $('.all-chats-search').addClass("bgw");
    $('.all-chats-search i').attr("class","fas fa-arrow-left");
    event.stopPropagation();
    searchIf = false;
  });
  $("body").on("click", function () {
    $('.all-chats-search').removeClass('bgw');
    $('.all-chats-search i').attr("class","fas fa-search");
  });



  //////////////////////////////////////////////////
  // FUNCTIONS
  //////////////////////////////////////////////////



/////
}); // Document Ready
