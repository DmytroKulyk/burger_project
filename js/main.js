$(document).ready(function(){


// $(window).scroll(function() {
//     $('.navigation').css('top', + $(this).scrollTop() + "px");

// });

 // $(document).on("scroll", onScroll);
    
    //smoothscroll
    // $('a[href^="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     $(document).off("scroll");
        
    //     $('.navigation_link').each(function () {
    //         $(this).children().removeClass('active');
    //     })
    //     $(this).children().addClass('active');
      
    //     var target = this.hash,
    //         menu = target;
    //     $target = $(target);
    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top+2
    //     }, 500, 'swing', function () {
    //         window.location.hash = target;
    //         $(document).on("scroll", onScroll);
    //     });
    // });


// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('.navigation a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.navigation ul li a').children().removeClass("active");
//             currLink.children().addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });

//  }


$(".burger_item_composition").click(function(){
    $(".burger_composition_list").toggleClass("burger_composition_list-active");
});

 var activeItem = $(".menu_accordion_item:first");
    // $(activeItem).addClass('menu_accordion-active');
 
    $(".menu_accordion_item").click(function(){
        $(activeItem).animate({width: "80px"}, {duration:300, queue:false});
        $(this).animate({width: "500px"}, {duration:300, queue:false});
        activeItem = this;
    });


$("#wrapper").fullpage();

});


