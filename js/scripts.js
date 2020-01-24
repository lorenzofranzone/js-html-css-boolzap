$(document).ready(function(){

  // Code

  // Search Chat

  $(".all-chats-search input").on("click", function (event) {
    $('.all-chats-search').addClass("bgw");
    $('.all-chats-search i').attr("class","fas fa-arrow-left");
    event.stopPropagation();
  });
  $("body").on("click", function () {
    $('.all-chats-search').removeClass('bgw');
    $('.all-chats-search i').attr("class","fas fa-search");
  });

  // Dropdown Message
  $(".dropicon").on("click", function (event) {
    $(this).next('ul.dropdown').addClass("d-block");
    event.stopPropagation();
  });
  $("body").on("click", function () {
    $('ul.dropdown').removeClass('d-block');
  });




  //////////////////////////////////////////////////
  // FUNCTIONS
  //////////////////////////////////////////////////



/////
}); // Document Ready
