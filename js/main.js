$(document).ready(function(){


$(window).scroll(function() {
    $('.navigation').css('top', $(this).scrollTop() + "px");

});

// $(".navigation_link").click(function(){
// 	$(".navigation_link").children().css("border-color","transparent" );
// 	$(this).children().css("border-color","#fff" );
// });

// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

 $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.navigation_link').each(function () {
            $(this).children().removeClass('active');
        })
        $(this).children().addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navigation ul li a').children().removeClass("active");
            currLink.children().addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });

 }

});


