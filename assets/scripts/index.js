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

// $(document).ready(function(){
//     $(".srch-btn").click(function(){
//         $(".search-box-container").toggle();
//         $("input[type='text']").focus();
//     });
// });


// $(document).ready(function() {
     
//     $(".fa-search").click(function() {
//        $(".search-box-container").toggle();
//      });
            
     
// // $(document).on("click", function () {
// //     $(".search-box-container").hide();
// // });

//  });

// let search = document.getElementsByClassName(".srch-btn");
// let box = document.getElementsByClassName(".search-box-container");



$(document).ready(function(){
    $('.srch-btn').click(function(event){
        event.stopPropagation();
         $(".search-box-container").toggle();
    });
    $(".search-box-container").on("click", function (event) {
        event.stopPropagation();
    });
});

$(document).on("click", function () {
    $(".search-box-container").css('display', "none");
});


// let search_btn = document.querySelector(".srch-btn");
// let search_box = document.querySelector(".search-box-container");

// search_btn.addEventListener('click', () =>{
//     if(search_box.style.display === 'none') {
//         search_box.style.display = 'block';
//     }
//     else {
//         search_box.style.display = 'none';
//     }
// });


var menu = document.querySelector('.navbar');
    var menubtn = document.querySelector('.menu-btn');
    var closebtn = document.querySelector('.close-btn');

    menubtn.addEventListener("click", () => {
        menu.classList.add('active');
    });

    closebtn.addEventListener("click", () => {
        menu.classList.remove("active");
    });


    
    AOS.init();