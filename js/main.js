$(document).ready(function(){




$(".burger_item_composition").click(function(){
    $(".burger_composition_list").toggleClass("burger_composition_list-active");
});

 
//page scroll
$(function(){
    var sections = $(".section"),
        display = $(".maincontainer"),
        inScroll = false;

    var scrollToSection = function(sectionEq){
        var position = 0;

        if(!inScroll){
            inScroll = true;

            position = (sections.eq(sectionEq).index() * -100) + "%";
           
            sections.eq(sectionEq).addClass('active')
             .siblings().removeClass('active');

            display.css({
            'transform' : 'translate3d(0, '+ position +', 0)'
            });
            
            setTimeout(function(){
                inScroll = false;
                $('.navigation_item').find('.navigation_circle').removeClass('navigation_circle_active');
                $('.navigation_item').eq(sectionEq).find('.navigation_circle').addClass('navigation_circle_active');
                  
            }, 1300)
       }

    }   

    $("#wrapper").on("wheel", function(e){
    
         var deltaY = e.originalEvent.deltaY,
            activeSection = sections.filter('.active'),
            nextSection = activeSection.next(),
            prevSection = activeSection.prev();
         
         if(deltaY > 0){// scroll down
            if(nextSection.length){
                scrollToSection(nextSection.index());
            }
         }

         if(deltaY < 0){// scroll up
            if(prevSection.length){
                 scrollToSection(prevSection.index());
            }
         }
    });

   $('.down_errow').on('click', function(e){
        e.preventDefault();
        scrollToSection(1);
   });
   
    $('.navigation_link, .menu_item-link').on('click', function(e){
        e.preventDefault();

        var href = parseInt($(this).attr('href'));

       scrollToSection(href);
    });

    $(document).on('keydown', function(e){

         var activeSection = sections.filter('.active'),
            nextSection = activeSection.next(),
            prevSection = activeSection.prev();

        switch(e.keyCode){
            case 40 :  //scroll down
                    if(nextSection.length){
                scrollToSection(nextSection.index());
            }
                break;
            case 38 :  // scroll up
            if(prevSection.length){
                 scrollToSection(prevSection.index());
            }
                break;
        }
    })

});


// Carusel

$(function(){
    
   var burgerCarusel = $(".owl-carousel").owlCarousel({
        items : 1,
        loop : true

    });

   $('.burger-carusel_content__btn-prew').on('click', function(e){
     e.preventDefault();
     console.log(burgerCarusel);
     burgerCarusel.trigger('prev.owl.carousel', [300]);
   });
   $('.burger-carusel_content__btn-next').on('click', function(e){
     e.preventDefault();
     console.log(burgerCarusel);
     burgerCarusel.trigger('next.owl.carousel', [300]);
   });
});

//team accardion

$(function(){
  $('.team_acco__trigger').on('click', function(e){
    e.preventDefault();
    
    var $this = $(this),
        item = $this.closest('.team_acco__item'),
        container = $this.closest('.team_acco'),
        items = container.find('.team_acco__item'),
        content = item.find('.team_acco__content'),
        otherContent = container.find('.team_acco__content');


        if(!item.hasClass('team_acco__item-active')){
            items.removeClass('team_acco__item-active');
            item.addClass('team_acco__item-active');
            otherContent.slideUp();
            content.slideDown();
        }else{
            item.removeClass('team_acco__item-active');
            content.slideUp();
        }
       
  });


});

// horizontal menu carusel

$(function(){
    $('.menu-acco_trigger').on('click', function(e) {
        e.preventDefault();
       
    var $this = $(this),
        container = $this.closest('.menu-acco'),
        item = $this.closest('.menu-acco_item'),
        items = container.find('.menu-acco_item'),
        activeItem = items.filter('.menu-acco_item_active'),
        content = item.find('.menu-acco_content'),
        activeContent = activeItem.find('.menu-acco_content');   
   

    if (!item.hasClass('menu-acco_item_active')) {

        items.removeClass('menu-acco_item_active');
        item.addClass('menu-acco_item_active');

        activeContent.animate({
            'width' : "0px"
        });

        content.animate({
            'width' : "550px"
        });
    }else{
        item.removeClass('menu-acco_item_active');
        content.animate({
            'width' : '0px'
        })
    }
})

    $(document).on('click', function(e){
         var $this = $(e.target);
        
        if(!$this.closest('.menu-acco').length){
            $('.menu-acco_content').animate({
                'width' : '0px'
            })
            $('.menu-acco_content').removeClass('menu-acco_item_active');
        }
    });

 });
//input mask
$(function(){
    $(".input_phone").inputmask('+1 (999) 999 99 99');
});



//popUp review window

$(function(){
    $(".review_list_text-btn").fancybox({
        type : 'inline',
        maxWidth : 460,
        fitToView : false,
        padding : 0
    });

    $('.full_review-close').on('click', function(e) {
        e.preventDefault();

        $.fancybox.close();
    });
})

//yandex map 


$(function(){
     ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [37.773972, -122.431297],
            zoom: 13,
            controls : []
        });

        var coords = [
            [37.793190,-122.396436],
            [37.7600032,-122.421563],
            [37.7858182,-122.463568],
            [37.8074142,-122.41693],
        ];

var  myCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-26, -52], //all placemarks are red
       draggable: false // and draggable
    });

    for (var i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
    }

    myMap.geoObjects.add(myCollection);
   


        myMap.behaviors.disable('scrollZoom');
    }
});


























});


