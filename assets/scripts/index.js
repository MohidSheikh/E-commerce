window.addEventListener("scroll", function () {
    var nav = document.querySelector("header");
    nav.classList.toggle('sticky', window.scrollY > 0);
});


// var menu = document.querySelector('.menu');
// var menubtn = document.querySelector('.menu-btn');
// var closebtn = document.querySelector('.close-btn');

// menubtn.addEventListener("click", () => {
//     menu.classList.add('active');
// });

// closebtn.addEventListener("click", () => {
//     menu.classList.remove("active");
// });

// $(document).ready(function(){
//   $(".search").click(function(){
//     $(".search-box").toggle();
//     $("input[type=text]").focus();
//   });
// });

$(document).ready(function() {
     
  $(".fa-search").click(function() {
     $(".search-box").toggle();
     $("input[type='text']").focus();
   });

});


var menu = document.querySelector('.navbar');
    var menubtn = document.querySelector('.menu-btn');
    var closebtn = document.querySelector('.close-btn');

    menubtn.addEventListener("click", () => {
        menu.classList.add('active');
    });

    closebtn.addEventListener("click", () => {
        menu.classList.remove("active");
    });
