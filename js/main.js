$(document).ready(function(){




$(".burger_composition-window").click(function(){
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
            $('.menu-acco_item').removeClass('menu-acco_item_active');
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

// form validation and submit


function valid() {
    var regempty = new RegExp('([^\\s*]+)'),
        regmail = new RegExp("/^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i"),
        regphone = new RegExp('/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im'),

    checkform = true;
    var sendform = function (elem) {
        console.log(elem.serialize());
               var 
            form = $(this),
            formData = form.serialize();

        $.ajax({
            url : "mail.php",
            type : 'POST',
            data : formData,
            success: function(data) {

                var popup = data.status ? '#success' : '#error';

                    $.fancybox.open([
                        {href : popup}
                        ], {
                            type : 'inline',
                            maxWidth : 250,
                            minWidth : 200,
                            minHeight : 105,
                            fitToView: false,
                            padding : 0,
                            afterClose : function () {
                                form.trigger('reset');
                            }
                        })
            

                console.log(data, typeof data);
            }
        })
    };


    $('.status-popup__message-close').on('click', function(e){
        e.preventDefault();

        $.fancybox.close();
    })

    var checkdata = function (elem) {
            // 6. Принимаем каждый инпут или техтареа
            // console.log("checkdata");
            //7.Свитчем получаем атрибут инпута или техтареа, и вызываем соотвествующую функцию на проверку этого поля
            switch ($(elem).attr("type")) {
                case 'email':
                    return checkmail(elem); // 8 функция возвращает true или false после проверки на регулярку
                    break;
                case 'tel':
                    return checltel(elem); // 8 функция возвращает true или false после проверки на регулярку
                    break;
                default: //Если тип инпута не совпал с вышепереисленными, сработает функция ниже
                    return checkother(elem); // 8 функция возвращает true или false после проверки на регулярку
            }
        },
        checkmail = function (elem) {
            if (!regmail.test(elem.value)) { //Если инпут не прошел валидацию
                showtooltip(elem); // Отображает ошибку вызвав метод showtooltip
                return false; // возвращаем false - что значит есть ошибка.
            } else {
                return true; //если проверка на регулярное выраженеи прошло успешно, значит инпут заполнен
            }
        },
        checktel = function (elem) {
            // console.log("Проверь телефон");
            if (!regphone.test(elem.value)) { //Если инпут не прошел валидацию
                showtooltip(elem); // Отображает ошибку вызвав метод showtooltip
                return false; // возвращаем false - что значит есть ошибка.
            } else {
                return true; //если проверка на регулярное выраженеи прошло успешно, значит инпут заполнен
            }
        },
        checkother = function (elem) {
            if (!regempty.test(elem.value)) {
                showtooltip(elem);
                return false;
            } else {
                return true;
            }
        },
        showtooltip = function (elem) {
            console.log("show tooltip");
            // console.log(elem);
            $(elem).qtip({ // Grab some elements to apply the tooltip to
                content: {
                    text: $(elem).attr("data-error")
                },
                show: {
                    event: event.type, // Use the same show event as the one that triggered the event handler
                    ready: true // Show the tooltip as soon as it's bound, vital so it shows up the first time you hover!
                },
                hide: {
                    // target: $(".to__index, .button__link, input[type='reset']") // Defaults to target element
                    // event: false, // Hide on mouse out by default
                    // effect: true, // Use default 90ms fade effect
                    // delay: 0, // No hide delay by default
                    // fixed: false, // Non-hoverable by default
                    // inactive: false, // Do not hide when inactive
                    // leave: false, // Hide when we leave the window
                    // distance: false // Don't hide after a set distance
                    event: 'click mouseleave'
                },
                position: {
                    my: 'top center',
                    at: 'bottom center'
                },
                style: {
                    classes: 'mytip mytip-red'
                }
            })
        };
    return {
        init: function (elem) {
            console.log("module init");
            var data = elem.find("input, textarea"); // 3. В форме ищем input, и textarea

            $.each(data, function (val, key) { //4.Каждый инпут или техтареа в массиве data перебираем
                //5.Вызываем функию checkdata и передаем в нее каждый инпут или каждый textarea
                if (checkdata(key) == false) { //9 Функция checkdata по каждому инпуту или textarea возвращает true/false и соответсвенно проверяем
                    checkform = false; //Тогда форма не проходит валидиацию
                }
                if (checkform == true) {
                    $.each($(".qtip"), function (val, key) {
                        $(this).hide();
                    });
                    sendform(elem);
                }
            });
        }
    }
}
$(document).ready(function () {
    // 1. Отлавливаем отправку формы
    $("form").on("submit", function (e) {
        e.preventDefault();
        //2.Передаем форму в функцию валидацию, в метод init
        valid().init($(this));
    })
});


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


